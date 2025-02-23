import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Users2,
  Monitor,
  Menu,
  Command,
  Shield,
  Zap,
  Activity
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function LandingPage () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='min-h-screen bg-slate-950'>
      {/* Navigation */}
      <nav className='fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/50 backdrop-blur-xl'>
        <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center gap-8'>
            <a href='/' className='flex items-center gap-2'>
              <span className='text-xl font-bold text-blue-500'>ZEON</span>
            </a>
            <div className='hidden md:flex items-center gap-6'>
              <a
                href='#features'
                className='text-sm text-slate-300 hover:text-white'
              >
                Features
              </a>
              <a
                href='#testimonials'
                className='text-sm text-slate-300 hover:text-white'
              >
                Testimonials
              </a>
              <a
                href='#pricing'
                className='text-sm text-slate-300 hover:text-white'
              >
                Pricing
              </a>
            </div>
          </div>

          <div className='hidden md:flex items-center gap-4'>
            <Button variant='ghost' className='text-slate-300 hover:text-white'>
              Documentation
            </Button>
            <Button variant='secondary'>
              Dashboard
              <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6 text-slate-300' />
              </Button>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-[300px] bg-slate-950 border-slate-800'
            >
              <div className='flex flex-col gap-4 mt-8'>
                <a
                  href='#features'
                  className='text-lg text-slate-300 hover:text-white'
                >
                  Features
                </a>
                <a
                  href='#testimonials'
                  className='text-lg text-slate-300 hover:text-white'
                >
                  Testimonials
                </a>
                <a
                  href='#pricing'
                  className='text-lg text-slate-300 hover:text-white'
                >
                  Pricing
                </a>
                <Link to='/documentation'>
                  <Button
                    variant='ghost'
                    className='text-slate-300 hover:text-white'
                  >
                    Documentation
                  </Button>
                </Link>
                <Link to='/dashboard'>
                  <Button
                    variant='ghost'
                    className='text-slate-300 hover:text-white'
                  >
                    Dashboard
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='relative pt-32 pb-24 sm:pt-40 sm:pb-32'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 mb-8'
            >
              <span className='text-sm text-slate-300'>
                ✨ Introducing ZEON
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-white sm:text-7xl'
            >
              Asset Management{' '}
              <span className='relative whitespace-nowrap'>
                <span className='relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                  Reimagined
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mx-auto mt-6 max-w-2xl text-lg text-slate-300'
            >
              The most comprehensive asset management platform for modern
              enterprises. Track, manage, and optimize your assets with
              unparalleled precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='mt-10 flex items-center justify-center gap-4'
            >
              <Link to='/dashboard'>
                <Button
                  size='lg'
                  className='group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                >
                  Get Started
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
              </Link>
              <Button size='lg' variant='outline'>
                Book Demo
              </Button>
            </motion.div>
          </div>

          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className='mt-16 rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden'
          >
            <Tabs defaultValue='dashboard' className='w-full'>
              <div className='flex items-center justify-between border-b border-slate-800 px-4'>
                <TabsList className='h-14 bg-transparent'>
                  <TabsTrigger
                    value='dashboard'
                    className='data-[state=active]:bg-slate-800/50'
                  >
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger
                    value='assets'
                    className='data-[state=active]:bg-slate-800/50'
                  >
                    Assets
                  </TabsTrigger>
                  <TabsTrigger
                    value='analytics'
                    className='data-[state=active]:bg-slate-800/50'
                  >
                    Analytics
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value='dashboard' className='p-4'>
                <img
                  src='https://v0.dev/placeholder.svg?height=400&width=800'
                  alt='Dashboard Preview'
                  className='rounded-lg border border-slate-800 w-full'
                />
              </TabsContent>
              <TabsContent value='assets' className='p-4'>
                <img
                  src='https://v0.dev/placeholder.svg?height=400&width=800'
                  alt='Assets Preview'
                  className='rounded-lg border border-slate-800 w-full'
                />
              </TabsContent>
              <TabsContent value='analytics' className='p-4'>
                <img
                  src='https://v0.dev/placeholder.svg?height=400&width=800'
                  alt='Analytics Preview'
                  className='rounded-lg border border-slate-800 w-full'
                />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        {/* Background gradient effect */}
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div
            className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
            aria-hidden='true'
          >
            <div
              className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id='features' className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Everything you need to manage assets at scale
            </h2>
            <p className='mt-6 text-lg leading-8 text-slate-300'>
              Built for enterprises that demand power and flexibility. Every
              feature is crafted to enhance your asset management workflow.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <FeatureCard
              icon={<Monitor className='h-6 w-6' />}
              title='Real-time Tracking'
              description='Monitor your assets in real-time with detailed status updates and location tracking.'
              gradient='from-blue-500 to-cyan-500'
            />
            <FeatureCard
              icon={<Users2 className='h-6 w-6' />}
              title='Team Management'
              description='Manage teams and permissions with role-based access control and detailed audit logs.'
              gradient='from-purple-500 to-pink-500'
            />
            <FeatureCard
              icon={<BarChart3 className='h-6 w-6' />}
              title='Advanced Analytics'
              description='Get deep insights into asset utilization, maintenance costs, and performance metrics.'
              gradient='from-orange-500 to-red-500'
            />
            {/* <FeatureCard
              icon={<Shield className='h-6 w-6' />}
              title='Enterprise Security'
              description='Bank-grade security with encryption at rest and in transit, plus compliance features.'
              gradient='from-green-500 to-emerald-500'
            />
            <FeatureCard
              icon={<Zap className='h-6 w-6' />}
              title='Automation'
              description='Automate routine tasks, maintenance schedules, and notifications.'
              gradient='from-yellow-500 to-orange-500'
            />
            <FeatureCard
              icon={<Activity className='h-6 w-6' />}
              title='Predictive Maintenance'
              description='AI-powered predictions for maintenance needs and asset lifecycle management.'
              gradient='from-pink-500 to-rose-500'
            /> */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id='testimonials'
        className='py-24 sm:py-32 border-y border-slate-800'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Trusted by industry leaders
            </h2>
            <p className='mt-6 text-lg leading-8 text-slate-300'>
              See what our customers have to say about their experience with
              ZEON
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <TestimonialCard
              quote='ZEON has transformed how we manage our global asset portfolio. The ROI was evident within the first month.'
              author='Sarah Chen'
              role='CTO'
              company='TechCorp Global'
              image='https://v0.dev/placeholder.svg?height=100&width=100'
            />
            <TestimonialCard
              quote='The predictive maintenance feature alone has saved us millions in potential equipment failures.'
              author='Michael Rodriguez'
              role='Operations Director'
              company='Industrial Systems'
              image='https://v0.dev/placeholder.svg?height=100&width=100'
            />
            <TestimonialCard
              quote='Best-in-class security features and compliance tools. Perfect for enterprise needs.'
              author='Emma Thompson'
              role='Security Manager'
              company='FinTech Solutions'
              image='https://v0.dev/placeholder.svg?height=100&width=100'
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* <section id='pricing' className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Simple, transparent pricing
            </h2>
            <p className='mt-6 text-lg leading-8 text-slate-300'>
              Choose the perfect plan for your business
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <PricingCard
              title='Starter'
              price='$99'
              description='Perfect for small businesses'
              features={[
                'Up to 100 assets',
                'Basic analytics',
                'Email support',
                '1 team member'
              ]}
            />
            <PricingCard
              title='Pro'
              price='$299'
              description='For growing companies'
              features={[
                'Up to 1,000 assets',
                'Advanced analytics',
                'Priority support',
                '5 team members',
                'API access'
              ]}
              popular
            />
            <PricingCard
              title='Enterprise'
              price='Custom'
              description='For large organizations'
              features={[
                'Unlimited assets',
                'Custom features',
                '24/7 support',
                'Unlimited team members',
                'Custom integrations'
              ]}
            />
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className='border-t border-slate-800 bg-slate-950'>
        <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
            <div>
              <h3 className='text-sm font-semibold text-white'>Product</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-sm text-slate-300 hover:text-white'
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-sm text-slate-300 hover:text-white'
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-white'>Company</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-sm text-slate-300 hover:text-white'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-sm text-slate-300 hover:text-white'
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-white'>Resources</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-sm text-slate-300 hover:text-white'
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-sm text-slate-300 hover:text-white'
                  >
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-semibold text-white'>Legal</h3>
              <ul className='mt-4 space-y-2'>
                <li>
                  <a
                    href='#'
                    className='text-sm text-slate-300 hover:text-white'
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-sm text-slate-300 hover:text-white'
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-12 border-t border-slate-800 pt-8'>
            <p className='text-sm text-slate-400'>
              © 2024 ZEON. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

function FeatureCard ({ icon, title, description, gradient }) {
  return (
    <Card className='group relative overflow-hidden border-slate-800 bg-slate-900/50'>
      <CardHeader>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${gradient}`}
        >
          {icon}
        </div>
        <CardTitle className='text-xl text-white mt-4'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-slate-300'>{description}</p>
      </CardContent>
      <div className='absolute inset-0 rounded-lg transition duration-300 group-hover:bg-slate-800/50' />
    </Card>
  )
}

function TestimonialCard ({ quote, author, role, company, image }) {
  return (
    <Card className='border-slate-800 bg-slate-900/50'>
      <CardHeader>
        <div className='flex items-center gap-4'>
          <img
            src={image || '/placeholder.svg'}
            alt={author}
            className='h-12 w-12 rounded-full object-cover'
          />
          <div>
            <CardTitle className='text-sm font-medium text-white'>
              {author}
            </CardTitle>
            <CardDescription className='text-sm text-slate-400'>
              {role} at {company}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className='text-slate-300'>{quote}</p>
      </CardContent>
    </Card>
  )
}

function PricingCard ({ title, price, description, features, popular }) {
  return (
    <Card
      className={`relative border-slate-800 ${
        popular ? 'bg-blue-500/10 border-blue-500/50' : 'bg-slate-900/50'
      }`}
    >
      {popular && (
        <div className='absolute -top-4 left-0 right-0 flex justify-center'>
          <Badge className='bg-blue-500'>Most Popular</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className='text-2xl text-white'>{title}</CardTitle>
        <CardDescription className='text-slate-300'>
          {description}
        </CardDescription>
        <div className='mt-4'>
          <span className='text-4xl font-bold text-white'>{price}</span>
          {price !== 'Custom' && <span className='text-slate-300'>/month</span>}
        </div>
      </CardHeader>
      <CardContent>
        <ul className='space-y-3'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center text-slate-300'>
              <svg
                className='mr-2 h-4 w-4 text-blue-500'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M5 13l4 4L19 7' />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className='w-full' variant={popular ? 'default' : 'outline'}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  )
}
