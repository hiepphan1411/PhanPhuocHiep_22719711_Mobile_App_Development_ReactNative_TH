async function fetchUser(id: string): Promise<{ id: string; name: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: "User " + id });
        }, 1000);
    });
}

//Async function fetchUsers(ids) gọi fetchUser cho từng ID
async function fetchUsers(ids: string[]) {
    const users = await Promise.all(ids.map(id => fetchUser(id)));
    return users;
}

//test
fetchUsers(["U01", "U02", "U03"]).then(users => console.log(users));