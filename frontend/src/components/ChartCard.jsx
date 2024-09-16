import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'

const ChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-background border border-border rounded shadow p-2'>
        <p className='text-sm font-medium'>{`${label}: ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

const ChartCard = ({ title, description, data, dataKey, trendPercentage }) => {
  const isTrendingUp = parseFloat(trendPercentage) >= 0

  // Check if data is valid
  const isDataValid = Array.isArray(data) && data.length > 0

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {isDataValid ? (
          <ResponsiveContainer width='100%' height={300}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid vertical={false} stroke='#E5E7EB' />
              <XAxis
                dataKey='name'
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <Tooltip
                content={<ChartTooltip />}
                cursor={{ fill: 'transparent' }}
              />
              <Bar
                dataKey={dataKey}
                fill='var(--primary)'
                radius={[4, 4, 0, 0]}
              >
                <LabelList
                  dataKey={dataKey}
                  position='top'
                  fill='#6B7280'
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className='flex items-center justify-center h-[300px] text-muted-foreground'>
            No data available
          </div>
        )}
      </CardContent>
      <CardFooter className='flex flex-col items-start gap-2'>
        {isDataValid && (
          <div className='flex items-center gap-2 text-sm font-medium'>
            {isTrendingUp ? 'Trending up' : 'Trending down'} by{' '}
            {Math.abs(trendPercentage)}%
            {isTrendingUp ? (
              <TrendingUp className='h-4 w-4 text-green-500' />
            ) : (
              <TrendingDown className='h-4 w-4 text-red-500' />
            )}
          </div>
        )}
        <p className='text-sm text-muted-foreground'>
          {isDataValid
            ? 'Showing current data for all entries'
            : 'No data available'}
        </p>
      </CardFooter>
    </Card>
  )
}

export default ChartCard
