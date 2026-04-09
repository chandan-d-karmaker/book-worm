
import ListedBookCard from './ListedBookCard';
import { NavLink } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from './ReadList';
import Wishlist from './Wishlist';

const ListedBooks = () => {

    return (
        <div className='w-4/5 mx-auto mt-9'>

            <div className='bg-base-200 py-9 rounded-2xl'>
                <h2 className='font-bold text-4xl text-center'>Books</h2>
            </div>

            <div className='flex justify-center mt-8'>
                <select defaultValue="Sort by" className="select text-white font-semibold bg-[#23BE0A] max-w-25">
                    <option disabled={true}>Sort by</option>
                    <option>Pages</option>
                    <option>Publish Year</option>
                    <option>Date</option>
                </select>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Book</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <ReadList/>
                </TabPanel>
                <TabPanel>
                    <Wishlist/>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;