export const getRandomNumber = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (res.ok) {
        return await res;
    }
 else {
    throw new Error('Request Failed');
 }
}