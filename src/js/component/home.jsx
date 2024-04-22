const SecondsCounter = () => {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);
    return (
        <div className="text-center">
            <h1>{count}</h1>
        </div>
    );
};

export default SecondsCounter;
