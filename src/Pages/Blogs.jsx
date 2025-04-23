import React from 'react';

const BlogCard = ({ title, content }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-600">{title}</h3>
            <div className="prose max-w-none text-sm sm:text-base">
                {content}
            </div>
        </div>
    );
};

const Blogs = () => {
    return (
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">React Concepts Explained</h2>
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                <BlogCard
                    title="What is useState and how does it work in React?"
                    content={
                        <div>
                            <p className="mb-4">
                                useState is a React Hook that allows functional components to manage state. It returns an array with two elements:
                                the current state value and a function to update it.
                            </p>
                            <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-4 overflow-x-auto">
                                <pre className="text-xs sm:text-sm">
                                    <code>
                                        {`const [count, setCount] = useState(0);

// Using the state
<button onClick={() => setCount(count + 1)}>
    Count is: {count}
</button>`}
                                    </code>
                                </pre>
                            </div>
                            <p>Key points about useState:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>State updates trigger re-renders</li>
                                <li>Initial state is only used on first render</li>
                                <li>State updates are asynchronous</li>
                                <li>Multiple state variables can be used in a single component</li>
                            </ul>
                        </div>
                    }
                />

                <BlogCard
                    title="What is the purpose of useEffect in React?"
                    content={
                        <div>
                            <p className="mb-4">
                                useEffect is a Hook that manages side effects in functional components. It's commonly used for data fetching,
                                subscriptions, or manually changing the DOM.
                            </p>
                            <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-4 overflow-x-auto">
                                <pre className="text-xs sm:text-sm">
                                    <code>
                                        {`useEffect(() => {
    // Effect code here
    document.title = 'New Title';

    return () => {
        // Cleanup code here
    };
}, [dependency]);`}
                                    </code>
                                </pre>
                            </div>
                            <p>Common use cases:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>API calls and data fetching</li>
                                <li>Subscriptions and event listeners</li>
                                <li>DOM manipulations</li>
                                <li>Cleanup operations</li>
                            </ul>
                        </div>
                    }
                />

                <BlogCard
                    title="What is a custom hook in React and when should you use one?"
                    content={
                        <div>
                            <p className="mb-4">
                                Custom hooks are JavaScript functions that start with 'use' and can call other hooks. They allow you to
                                extract component logic into reusable functions.
                            </p>
                            <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-4 overflow-x-auto">
                                <pre className="text-xs sm:text-sm">
                                    <code>
                                        {`const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
};`}
                                    </code>
                                </pre>
                            </div>
                            <p>When to use custom hooks:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Share logic between components</li>
                                <li>Complex state management</li>
                                <li>Reusable side effects</li>
                                <li>Abstract complex business logic</li>
                            </ul>
                        </div>
                    }
                />

                <BlogCard
                    title="Difference between controlled and uncontrolled components?"
                    content={
                        <div>
                            <p className="mb-4">
                                In React, form handling can be done through controlled or uncontrolled components. Each approach has its own use cases and benefits.
                            </p>
                            <div className="bg-gray-100 p-4 rounded-md mb-4">
                                <p className="font-semibold mb-2">Controlled Component:</p>
                                <div>
                                    <pre className="text-sm mb-4 overflow-x-auto">
                                        <code>
                                            {`const [value, setValue] = useState('');

<input
    value={value}
    onChange={(e) => setValue(e.target.value)}
/>`}
                                        </code>
                                    </pre>
                                </div>
                                <p className="font-semibold mb-2">Uncontrolled Component:</p>
                                <div>
                                    <pre className="text-sm overflow-x-auto">
                                        <code>
                                            {`const inputRef = useRef();

<input
    ref={inputRef}
    defaultValue="default"
/>`}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-semibold mb-3 text-blue-600">Controlled:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>React manages the state</li>
                                        <li>More predictable</li>
                                        <li>Immediate access to value</li>
                                        <li>Better for form validation</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-semibold mb-3 text-blue-600">Uncontrolled:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>DOM handles the state</li>
                                        <li>Less code</li>
                                        <li>Better performance</li>
                                        <li>Good for simple forms</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                Controlled components are generally better for complex forms where you need validation,
                                field dependencies, or immediate field access. Uncontrolled components are simpler and can be
                                useful for basic forms or when integrating with non-React code.
                            </p>
                        </div>
                    }
                />

                <BlogCard
                    title="Understanding useFormStatus() in React"
                    content={
                        <div>
                            <p className="mb-4">
                                useFormStatus is a new React hook introduced in React 18 that provides form submission state information
                                within form actions. It's particularly useful in Server Components and helps manage loading states during form submissions.
                            </p>
                            <div className="bg-gray-100 p-3 sm:p-4 rounded-md mb-4 overflow-x-auto">
                                <pre className="text-xs sm:text-sm">
                                    <code>
                                        {`import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    );
}`}
                                    </code>
                                </pre>
                            </div>
                            <p className="font-semibold mb-2">Key Features:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Tracks form submission state</li>
                                <li>Works with Server Actions</li>
                                <li>Provides pending state information</li>
                                <li>Enables better UX during form submissions</li>
                            </ul>
                            <p className="mb-4">
                                The hook returns an object with a pending boolean that indicates whether a form is currently being submitted.
                                This allows you to show loading states, disable buttons, or provide visual feedback during form submissions.
                            </p>
                            <div className="bg-yellow-100 p-4 rounded-md">
                                <p className="font-semibold">Note:</p>
                                <p>useFormStatus must be used within a form context and is designed to work with Server Components
                                    and Server Actions. It's part of React's broader strategy for better server-client integration.</p>
                            </div>
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default Blogs;