import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { isAuth: state.auth.isAuth };
};

function Hook({ isAuth }) {
    const [counter, setCounter] = useState(0);

    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now(),
    });

    const [type, setType] = useState('users');
    const [data, setData] = useState([]);

    function increment() {
        setCounter((...args) => {
            console.log(args.length);
            return args[0] + 1;
        });
    }

    function updateTitle() {
        setState((prev) => {
            return { ...prev, title: 'Не счетчик' };
        });
    }

    useEffect(() => {
        console.log('HOOK Mount', isAuth);
        return () => {
            console.log('HOOK Unmount');
        };
    }, [isAuth]);

    useEffect(() => {
        console.log('type: ', type);
        fetch(`https://jsonplaceholder.typicode.com/${type}/1`).then(
            (response) => response.json().then((json) => setData(json)),
        );
    }, [type]);

    useEffect(() => {
        console.log('mount');
    }, []);

    return (
        <>
            <div>
                <h1>Hook</h1>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={updateTitle}
                >
                    Изменить название
                </button>
                <h1>{counter}</h1>
                <pre>{JSON.stringify(state, null, 5)}</pre>
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setType('users')}
                >
                    users
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setType('todos')}
                >
                    todos
                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setType('posts')}
                >
                    posts
                </button>
                <pre>{JSON.stringify(data, null, 5)}</pre>
            </div>
        </>
    );
}

const HookContainer = connect(mapStateToProps)(Hook);

export default HookContainer;
