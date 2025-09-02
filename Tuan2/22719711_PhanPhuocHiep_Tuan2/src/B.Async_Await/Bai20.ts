async function fetchUserWithTimeout(id: number): Promise<{ id: number; name: string }> {
    const timeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 2000)
    );

    const apiCall = new Promise<{id: number; name: string}>((resolve) =>
        setTimeout(() => resolve({ id, name: "User " + id }), 3000) //delay 3s > 2s => error
    );

    return await Promise.race([apiCall, timeout]);
}

//test
fetchUserWithTimeout(1)
    .then(user => console.log("User fetched:", user))
    .catch(error => console.error("Error fetching user:", error));