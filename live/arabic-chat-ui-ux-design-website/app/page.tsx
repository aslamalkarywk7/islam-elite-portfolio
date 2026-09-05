"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Shield, Sparkles, Zap, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">شات العرب</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              المميزات
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              عن المنصة
            </Link>
            <Link href="/rooms" className="text-muted-foreground hover:text-foreground transition-colors">
              الغرف
            </Link>
            <Link href="/admin" className="text-muted-foreground hover:text-foreground transition-colors">
              لوحة التحكم
            </Link>
          </nav>
          <Link href="/rooms">
            <Button className="gap-2">
              <span>دخول الشات</span>
              <MessageCircle className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>منصة الدردشة العربية الأولى</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
              تواصل مع مجتمعك
              <span className="text-primary block mt-2">في الوقت الحقيقي</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              انضم إلى آلاف المستخدمين في غرف الدردشة العربية. تحدث، شارك، وابنِ صداقات جديدة في بيئة آمنة وممتعة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/rooms">
                <Button size="lg" className="text-lg px-8 py-6 gap-2">
                  <span>ابدأ الدردشة الآن</span>
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  اكتشف المزيد
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">+50K</div>
                <div className="text-sm text-muted-foreground mt-1">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">+100</div>
                <div className="text-sm text-muted-foreground mt-1">غرفة دردشة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">دعم متواصل</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا تختار شات العرب؟
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نوفر لك تجربة دردشة فريدة مع ميزات متقدمة وواجهة سهلة الاستخدام
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />}
              title="دردشة فورية"
              description="تواصل في الوقت الحقيقي مع تقنية WebSocket المتطورة لأفضل تجربة"
            />
            <FeatureCard 
              icon={<Users className="w-6 h-6" />}
              title="غرف متنوعة"
              description="اختر من بين العديد من الغرف المتخصصة حسب اهتماماتك"
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />}
              title="بيئة آمنة"
              description="نظام إشراف متقدم وفلتر للكلمات لضمان تجربة نظيفة"
            />
            <FeatureCard 
              icon={<MessageCircle className="w-6 h-6" />}
              title="رسائل خاصة"
              description="تواصل بشكل خاص مع أصدقائك عبر نظام الرسائل الخاصة"
            />
            <FeatureCard 
              icon={<Sparkles className="w-6 h-6" />}
              title="رتب مميزة"
              description="نظام رتب متدرج من الضيف إلى المالك مع صلاحيات خاصة"
            />
            <FeatureCard 
              icon={<Globe className="w-6 h-6" />}
              title="دعم عربي كامل"
              description="واجهة عربية بالكامل مصممة خصيصاً للمستخدم العربي"
            />
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              نظام الرتب
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              كل رتبة تأتي مع صلاحيات ومميزات خاصة
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <RoleBadge role="owner" label="المالك" />
            <RoleBadge role="admin" label="المشرف" />
            <RoleBadge role="vip" label="VIP" />
            <RoleBadge role="member" label="عضو" />
            <RoleBadge role="guest" label="زائر" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              جاهز للانضمام إلى مجتمعنا؟
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              ابدأ رحلتك في أكبر مجتمع دردشة عربي اليوم
            </p>
            <Link href="/rooms">
              <Button size="lg" className="text-lg px-10 py-6 gap-2">
                <span>ابدأ الآن مجاناً</span>
                <MessageCircle className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">شات العرب</span>
            </div>
            <p className="text-sm text-muted-foreground">
              جميع الحقوق محفوظة © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function RoleBadge({ role, label }: { role: string; label: string }) {
  const colorMap: Record<string, string> = {
    owner: "bg-role-owner/10 text-role-owner border-role-owner/30",
    admin: "bg-role-admin/10 text-role-admin border-role-admin/30",
    vip: "bg-role-vip/10 text-role-vip border-role-vip/30",
    member: "bg-role-member/10 text-role-member border-role-member/30",
    guest: "bg-role-guest/10 text-role-guest border-role-guest/30",
  };
  
  return (
    <div className={`px-6 py-3 rounded-full border text-lg font-semibold ${colorMap[role]}`}>
      {label}
    </div>
  );
}
