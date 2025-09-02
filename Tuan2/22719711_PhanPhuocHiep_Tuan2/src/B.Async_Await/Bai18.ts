async function fetchUser(id: string): Promise<{ id: string; name: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "User " + id });
        }, 1000);
    });
}

async function runFetchUser() {
    const user = await fetchUser("U01");
    console.log(user);
}

runFetchUser();