'use client';

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Smartphone, Globe, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const iconOptions = [
  { value: 'Smartphone', label: 'Smartphone', icon: Smartphone },
  { value: 'Globe', label: 'Globe', icon: Globe },
  { value: 'ShoppingCart', label: 'Shopping Cart', icon: ShoppingCart },
];

export default function ServicesTable() {
  const [services, setServices] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'Smartphone',
    features: [''],
    badges: [''],
  });

  const fetchServices = async () => {
    const response = await fetch('/api/admin/services');
    if (response.ok) {
      const data = await response.json();
      setServices(data.map((s: any) => ({
        ...s,
        features: JSON.parse(s.features || '[]'),
        badges: JSON.parse(s.badges || '[]'),
      })));
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/admin/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data.map((s: any) => ({
          ...s,
          features: JSON.parse(s.features || '[]'),
          badges: JSON.parse(s.badges || '[]'),
        })));
      }
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      features: formData.features.filter(f => f.trim()),
      badges: formData.badges.filter(b => b.trim()),
    };

    const url = editingService
      ? `/api/admin/services/${editingService.id}`
      : '/api/admin/services';
    const method = editingService ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      toast.success(editingService ? 'Service updated!' : 'Service created!');
      setIsDialogOpen(false);
      resetForm();
      fetchServices();
    } else {
      toast.error('Failed to save service');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    const response = await fetch(`/api/admin/services/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      toast.success('Service deleted!');
      fetchServices();
    }
  };

  const handleEdit = (service: any) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon,
      features: service.features,
      badges: service.badges,
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setEditingService(null);
    setFormData({
      title: '',
      description: '',
      icon: 'Smartphone',
      features: [''],
      badges: [''],
    });
  };

  const addFeature = () => setFormData({ ...formData, features: [...formData.features, ''] });
  const addBadge = () => setFormData({ ...formData, badges: [...formData.badges, ''] });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Services</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingService ? 'Edit Service' : 'New Service'}</DialogTitle>
              <DialogDescription>
                {editingService ? 'Update service information' : 'Add a new service to your website'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Icon</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                >
                  {iconOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Features</label>
                {formData.features.map((feature, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...formData.features];
                        newFeatures[i] = e.target.value;
                        setFormData({ ...formData, features: newFeatures });
                      }}
                    />
                    {formData.features.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          const newFeatures = formData.features.filter((_, idx) => idx !== i);
                          setFormData({ ...formData, features: newFeatures });
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addFeature}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Feature
                </Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Badges</label>
                {formData.badges.map((badge, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      value={badge}
                      onChange={(e) => {
                        const newBadges = [...formData.badges];
                        newBadges[i] = e.target.value;
                        setFormData({ ...formData, badges: newBadges });
                      }}
                    />
                    {formData.badges.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          const newBadges = formData.badges.filter((_, idx) => idx !== i);
                          setFormData({ ...formData, badges: newBadges });
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addBadge}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Badge
                </Button>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingService ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Icon</TableHead>
              <TableHead>Features</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="font-medium">{service.title}</TableCell>
                <TableCell>{service.icon}</TableCell>
                <TableCell>{service.features?.length || 0} features</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={() => handleEdit(service)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(service.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
