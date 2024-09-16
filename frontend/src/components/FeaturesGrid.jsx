import { CalendarIcon, FileTextIcon } from '@radix-ui/react-icons'

import {
  ComputerDesktopIcon,
  UsersIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  BellIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import Marquee from '@/components/magicui/marquee'
import { AnimatedListComponent } from './AnimatedListComponent'
import { AnimatedBeamOutput } from './AnimatedBeamOutput'
import { DashboardChart } from './DahboardChart'
const assets = [
  {
    name: 'Laptop-001',
    body: 'Dell XPS 15, 32GB RAM, 1TB SSD, assigned to Marketing dept.'
  },
  {
    name: 'Server-005',
    body: 'Dell PowerEdge R740, 128GB RAM, 10TB Storage, hosts main database.'
  },
  {
    name: 'Monitor-023',
    body: '27-inch 4K LG UltraFine Display, assigned to Design team.'
  },
  {
    name: 'Router-007',
    body: 'Cisco Meraki MX68, provides secure VPN access for remote workers.'
  },
  {
    name: 'Printer-012',
    body: 'HP Color LaserJet Pro, high-capacity, located in Finance department.'
  }
]

const features = [
  {
    Icon: ComputerDesktopIcon,
    name: 'Asset Tracking',
    description: 'Easily add, update, and track all IT assets in one place.',
    href: '/asset-tracking',
    cta: 'View Assets',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee
        pauseOnHover
        className='absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,)]'
      >
        {assets.map((asset, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='flex flex-col'>
                <figcaption className='text-sm font-medium dark:text-white'>
                  {asset.name}
                </figcaption>
              </div>
            </div>
            <blockquote className='mt-2 text-xs'>{asset.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    )
  },
  {
    Icon: BellIcon,
    name: 'Alerts & Notifications',
    description:
      'Get notified about asset status changes, maintenance due dates, and more.',
    href: '/alerts',
    cta: 'View Alerts',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <AnimatedListComponent className='absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105' />
    )
  },
  {
    Icon: ChartBarIcon,
    name: 'Analytics Dashboard',
    description: 'Get insights on asset utilization and performance.',
    href: '/analytics',
    cta: 'View Analytics',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <div className='self-center h-[250px] flex justify-end pt-24 px-12 [mask-image:linear-gradient(to_top,transparent_2%,)]  items-center align-middle '>
        <DashboardChart className='absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105' />
      </div>
    )
  },
  {
    Icon: UsersIcon,
    name: 'Employee Management',
    description: 'Manage employee profiles and asset assignments efficiently.',
    href: '/employee-management',
    cta: 'Manage Employees',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <div className='self-center flex justify-center items-center align-middle mt-20'>
        <AnimatedBeamOutput />
      </div>
    )
  }
]

export function FeaturesGrid () {
  return (
    <BentoGrid className='max-w-7xl lg:grid-rows-3 mx-auto p-4'>
      {features.map((feature, idx) => (
        <BentoCard className='' key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
