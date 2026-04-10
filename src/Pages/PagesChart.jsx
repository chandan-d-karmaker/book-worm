import React, { useContext } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { bookContext } from '../ContextAPI/BookContext';
import EmptyState from '../Components/EmptyState';
import { useNavigate } from 'react-router';


// 1. Logic for the custom "Mountain" shape
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};

// 2. The Shape Component
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    // Safety check: don't render if dimensions are missing
    if (x == null || y == null) return null;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// 3. The Main Chart Component
const BookPagesChart = () => {
    const { storedBooks } = useContext(bookContext);
    const navigate = useNavigate();

    const chartData = storedBooks.map((book) => ({
        bookName: book.bookName || book.title || `Book ${book.bookId}`,
        totalPages: book.totalPages || 0,
    }));

    if (chartData.length === 0) {
        return <div className='mt-20 w-4/5 mx-auto'>
            <EmptyState title="No books in your read list yet" onAction={() => navigate('/#books')} />
        </div>
    }

    return (
        <div style={{ width: '100%', height: 600, padding: '1rem' }}>
            <h2 className="text-3xl font-bold mb-4 text-center">Pages to Read</h2>
            <ResponsiveContainer>
                <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="bookName"
                        angle={-45}
                        textAnchor="end"
                        interval={0}
                        height={80}
                    />
                    <YAxis label={{ value: 'Page Count', angle: -90, position: 'insideLeft' }} />
                    <Tooltip cursor={{ fill: 'transparent' }} />
                    <Bar
                        dataKey="totalPages"
                        fill="#8884d8"
                        shape={<TriangleBar />}
                        label={{ position: 'top' }}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BookPagesChart;