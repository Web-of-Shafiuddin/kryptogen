'use client';

import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, ExternalLink, Github } from 'lucide-react';
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

export default function ProjectsTable() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'web',
    tags: [''],
    projectUrl: '',
    githubUrl: '',
  });

  const fetchProjects = async () => {
    const response = await fetch('/api/admin/portfolio');
    if (response.ok) {
      const data = await response.json();
      setProjects(data.map((p: any) => ({
        ...p,
        tags: JSON.parse(p.tags || '[]'),
      })));
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/admin/portfolio');
      if (response.ok) {
        const data = await response.json();
        setProjects(data.map((p: any) => ({
          ...p,
          tags: JSON.parse(p.tags || '[]'),
        })));
      }
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      tags: formData.tags.filter(t => t.trim()),
    };

    const url = editingProject
      ? `/api/admin/portfolio/${editingProject.id}`
      : '/api/admin/portfolio';
    const method = editingProject ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      toast.success(editingProject ? 'Project updated!' : 'Project created!');
      setIsDialogOpen(false);
      resetForm();
      fetchProjects();
    } else {
      toast.error('Failed to save project');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    const response = await fetch(`/api/admin/portfolio/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      toast.success('Project deleted!');
      fetchProjects();
    }
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      tags: project.tags,
      projectUrl: project.projectUrl || '',
      githubUrl: project.githubUrl || '',
    });
    setIsDialogOpen(true);
  };

  const resetForm = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      description: '',
      category: 'web',
      tags: [''],
      projectUrl: '',
      githubUrl: '',
    });
  };

  const addTag = () => setFormData({ ...formData, tags: [...formData.tags, ''] });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Portfolio Projects</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProject ? 'Edit Project' : 'New Project'}</DialogTitle>
              <DialogDescription>
                {editingProject ? 'Update project information' : 'Add a new project to your portfolio'}
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
                <label className="text-sm font-medium">Category</label>
                <select
                  className="w-full p-2 border rounded-md"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Apps</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tags</label>
                {formData.tags.map((tag, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      value={tag}
                      onChange={(e) => {
                        const newTags = [...formData.tags];
                        newTags[i] = e.target.value;
                        setFormData({ ...formData, tags: newTags });
                      }}
                    />
                    {formData.tags.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          const newTags = formData.tags.filter((_, idx) => idx !== i);
                          setFormData({ ...formData, tags: newTags });
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addTag}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Tag
                </Button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project URL</label>
                <Input
                  value={formData.projectUrl}
                  onChange={(e) => setFormData({ ...formData, projectUrl: e.target.value })}
                  placeholder="https://example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">GitHub URL</label>
                <Input
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  placeholder="https://github.com/user/repo"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingProject ? 'Update' : 'Create'}
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
              <TableHead>Category</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell className="capitalize">{project.category}</TableCell>
                <TableCell>{project.tags?.length || 0} tags</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {project.projectUrl && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="icon" onClick={() => handleEdit(project)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(project.id)}
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
