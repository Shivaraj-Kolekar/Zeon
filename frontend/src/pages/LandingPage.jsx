import React from 'react'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/Container'
import {
  ComputerDesktopIcon,
  UserIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import FeatureCard from '@/components/FeatureCard'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Link } from 'react-router-dom'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import { DatePicker } from '@/components/DatePicker'
function LandingPage () {
  return (
    <>
      <div
        className='min-h-screen min-w-screen lg:mx-40 md:mx-10 mx-5 flex justify-center   items-center flex-col
      '
      >
        <Container className=''>
          <div className='flex items-center  mt-20 flex-col'>
            <div
              className={cn(
                'group rounded-full border border-black/5 bg-neutral-100 my-4 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
              )}
            >
              <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
                <span>✨ Introducing ZEON</span>
                <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              </AnimatedShinyText>
            </div>
            <h1 className='text-6xl my-4 self-center text-center items-center font-semibold dark:text-white text-black'>
              Transform Chaos into Control
            </h1>
            <p className='text-2xl font-semibold items-center text-center mb-4 dark:text-gray-300 text-gray-600'>
              Your all-in-one solution for seamless asset management. Maximize
              efficiency, minimize costs, and regain peace of mind with our
              intelligent platform designed for modern businesses.
            </p>
            <Link to='/dashboard'>
              <Button className=' mt-4 mb-2'>
                Get Started{' '}
                <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              </Button>
            </Link>
          </div>
        </Container>

        {/*<Container className='mx-8'>
          <div className='relative flex flex-col items-center py-10 md:py-16'>
            <Button
              variant='secondary'
              className='text-2xl   text-black font-semibold items-center text-center mb-8  dark:text-black'
            >
              Check out the Demo here
              <ArrowDownIcon />
            </Button>{' '}
            {/*<div className='bg-gray-400 absolute left-1/2 top-1/2  md:h-[800px] -z-10 md:w-[1300px] rounded-xl -translate-x-1/2  -translate-y-1/2 inset-0 blur-[50rem]'></div>
            <HeroVideoDialog
              className='dark:hidden block'
              animationStyle='from-center'
              videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
              thumbnailSrc='https://startup-template-sage.vercel.app/hero-light.png'
              thumbnailAlt='Hero Video'
            />
            <HeroVideoDialog
              className='hidden dark:block'
              animationStyle='from-center'
              videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
              thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
              thumbnailAlt='Hero Video'
            />
          </div>
        </Container>*/}
        <Container>
          <h2 className='text-4xl mt-16 text-center mb-8 font-semibold'>
            Why Choose us
          </h2>
          <div className='grid grid-cols-3 mb-12 gap-5'>
            <FeatureCard
              className='custom-spotlight-card col-span-3 lg:col-span-1  '
              spotlightColor='rgba(0, 229, 255, 0.2)'
            >
              <ComputerDesktopIcon className='w-10 h-10' />
              <h2 className='text-2xl font-semibold'>Asset Tracking</h2>
              <p className='dark:text-gray-300 text-gray-800'>
                Easily add, update, and track all your organization's assets in
                one place.
              </p>
              <Link to='/dashboard'>
                <Button className='my-4 '>Learn more</Button>
              </Link>
            </FeatureCard>
            <FeatureCard
              className='custom-spotlight-card col-span-3 lg:col-span-1 '
              spotlightColor='rgba(0, 229, 255, 0.2)'
            >
              <UserIcon className='w-10 h-10'></UserIcon>
              <h2 className='text-2xl font-semibold'>Employee Management</h2>
              <p className='dark:text-gray-300 text-gray-800'>
                Manage employee profiles and asset assignments efficiently.
              </p>
              <Link to='/dashboard'>
                <Button className='my-4 '>Learn more</Button>
              </Link>
            </FeatureCard>
            <FeatureCard
              className='custom-spotlight-card col-span-3 lg:col-span-1 '
              spotlightColor='rgba(0, 229, 255, 0.2)'
            >
              <ChartBarIcon className='w-10 h-10' />
              <h2 className='text-2xl font-semibold'>Analytics Dashboard</h2>
              <p className='dark:text-gray-300 text-gray-800'>
                Get insights on asset utilization, management and performance.
              </p>
              <Link to='/dashboard'>
                <Button className='my-4 '>Learn more</Button>
              </Link>
            </FeatureCard>
          </div>
        </Container>

        <div className='min-w-screen mt-16 mb-16'>
          <h2 className='text-4xl mt-4 mb-8 text-center font-semibold '>FAQ</h2>
          <Accordion type='single' collapsible className=''>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='dark:bg-slate-950 bg-slate-100'>
                What types of assets can this tool manage?
              </AccordionTrigger>
              <AccordionContent className=''>
                Our tool manages both physical and digital assets, including IT
                equipment, vehicles, machinery, software licenses, and
                intellectual property. It's adaptable to various industries and
                asset types.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger className='dark:bg-slate-950 bg-slate-100'>
                What support do you offer during implementation?
              </AccordionTrigger>
              <AccordionContent>
                We provide a dedicated project manager, technical support team,
                data migration assistance, and customized training for your
                staff. Post-implementation, we offer 24/7 technical support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger className='dark:bg-slate-950 bg-slate-100'>
                What kind of reports can the tool generate?
              </AccordionTrigger>
              <AccordionContent>
                The tool offers customizable reports on asset utilization,
                depreciation, maintenance costs, compliance status, and more.
                Reports can be scheduled or generated on-demand in various
                formats.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}

export default LandingPage
