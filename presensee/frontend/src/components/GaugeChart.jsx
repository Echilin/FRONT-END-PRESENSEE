import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer
} from "recharts"

// O tamanho vem do elemento pai (o gráfico ocupa 100% de largura e altura).
function GaugeChart({ value, color = "#ff0000", label }) {

  return (

    <div className="gauge-chart">

      <ResponsiveContainer width="100%" height="100%">

        <RadialBarChart
          data={[{ value, fill: color }]}
          innerRadius="72%"
          outerRadius="100%"
          startAngle={210}
          endAngle={-30}
        >

          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />

          <RadialBar
            dataKey="value"
            background={{ fill: "#ececf5" }}
            cornerRadius={20}
            isAnimationActive={true}
          />

        </RadialBarChart>

      </ResponsiveContainer>

      <span className="gauge-chart-label">
        {label ?? `${value}%`}
      </span>

    </div>

  )

}

export default GaugeChart
