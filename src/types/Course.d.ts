import Category from './Category';

type Course = {
    id: number,
    name: string,
    description: string,
    imageUrl: string,
    categories: Array<Category>
};

export default Course;
