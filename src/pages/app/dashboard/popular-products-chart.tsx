import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const COLORS = [
  colors.violet[500],
  colors.blue[500],
  colors.green[500],
  colors.yellow[500],
  colors.red[500],
]

const data = [
  {
    product: 'Pepperoni',
    amount: 40,
  },
  {
    product: 'Calabresa',
    amount: 30,
  },
  {
    product: 'Frango com Catupiry',
    amount: 20,
  },
  {
    product: 'Portuguesa',
    amount: 10,
  },
  {
    product: 'Mussarela',
    amount: 5,
  },
]

export function PopularProductsChart() {
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: {
    cx: number
    cy: number
    midAngle: number
    innerRadius: number
    outerRadius: number
    value: number
    index: number
  }) => {
    const RADIAN = Math.PI / 180
    const radius = 12 + innerRadius + (outerRadius - innerRadius)
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        className="fill-muted-foreground text-xs"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {data[index].product.length > 12
          ? data[index].product.substring(0, 12).concat('...')
          : data[index].product}{' '}
        ({value})
      </text>
    )
  }
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos mais vendidos
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((item, index) => (
                <Cell
                  key={`cell-${item.product}`}
                  fill={COLORS[index % COLORS.length]}
                  className="stroke-background hover:opacity-80"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
