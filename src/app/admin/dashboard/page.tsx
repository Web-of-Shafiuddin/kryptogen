'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, Briefcase, LogOut, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ServicesTable from '@/components/admin/ServicesTable';
import ProjectsTable from '@/components/admin/ProjectsTable';
import BlogTable from '@/components/admin/BlogTable';

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('services');

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (!user) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <StatsCard
            title="Services"
            count={3}
            icon={Briefcase}
            color="text-primary"
          />
          <StatsCard
            title="Projects"
            count={6}
            icon={FileText}
            color="text-primary"
          />
          <StatsCard
            title="Blog Posts"
            count={6}
            icon={FileText}
            color="text-primary"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="services">
                <Briefcase className="h-4 w-4 mr-2" />
                Services
              </TabsTrigger>
              <TabsTrigger value="portfolio">
                <FileText className="h-4 w-4 mr-2" />
                Portfolio
              </TabsTrigger>
              <TabsTrigger value="blog">
                <FileText className="h-4 w-4 mr-2" />
                Blog
              </TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="mt-6">
              <ServicesTable />
            </TabsContent>

            <TabsContent value="portfolio" className="mt-6">
              <ProjectsTable />
            </TabsContent>

            <TabsContent value="blog" className="mt-6">
              <BlogTable />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

function StatsCard({ title, count, icon: Icon, color }: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{count}</div>
      </CardContent>
    </Card>
  );
}
