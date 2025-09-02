async function fetchWithRetry(url: string, retries: number): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network response not ok");
            return await response.json();
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error);
            if (attempt === retries) throw new Error("All retries failed");
        }
    }
}

//test
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3)
    .then((data) => console.log("Fetched with retry:", data))
    .catch((err) => console.error(err.message));
