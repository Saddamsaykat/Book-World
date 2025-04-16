import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

import { LocalStorage } from '../LocalStorage/LocalStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const localData = LocalStorage();
        setChartData(localData);
    }, []);

    return (
        <div className='container mx-auto mt-20' style={{ width: '100%' }}>
            <ResponsiveContainer width="100%" aspect={4}>
                <BarChart data={chartData}
                    margin={{
                        top: 50,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}  >
                    <CartesianGrid strokeDasharray="3 1" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

Chart.propTypes = {
    props: PropTypes.object
};

export default Chart;
