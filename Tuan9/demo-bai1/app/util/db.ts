import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync("jobs.db");


interface Job {
  id: number;
  title: string;
  completed: boolean;
}


export const initDb = (): void => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        completed BOOLEAN
      );`
    );
  });
};

export const addJob = (title: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO jobs (title, completed) VALUES (?, ?)',
        [title, false],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const deleteJob = (title: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM jobs WHERE title = ?',
        [title],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getJobs = (): Promise<Job[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM jobs',
        [],
        (_, { rows }) => resolve(rows._array as Job[]),
        (_, error) => reject(error)
      );
    });
  });
};
