import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

export const DonutChart = ({ chart }) => {
  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <PieChart width="100%" margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <Pie
          data={chart.data}
          innerRadius={`${chart.innerRadius}%`}
          outerRadius="100%"
          dataKey="value"
          stroke="none"
          startAngle={chart.startAngle}
          endAngle={chart.endAngle}
        >
          {chart.data.map((entry) => (
            <Cell key={`cell-${entry.id}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
