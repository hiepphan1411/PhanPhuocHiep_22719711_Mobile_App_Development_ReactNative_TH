import * as SQLite from "expo-sqlite";

export type Job = {
  id: number;
  title: string;
  completed: boolean;
};

let _db: SQLite.SQLiteDatabase | null = null;

async function getDb() {
  if (!_db) {
    _db = await SQLite.openDatabaseAsync("jobs.db");
  }
  return _db;
}

export async function initDb(): Promise<void> {
  const db = await getDb();
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed INTEGER DEFAULT 0
    );
  `);
}

export async function addJob(title: string) {
  const db = await getDb();
  const result = await db.runAsync(
    "INSERT INTO jobs (title, completed) VALUES (?, ?)",
    title,
    0
  );
  return result.lastInsertRowId;
}

export async function deleteJob(id: number) {
  const db = await getDb();
  await db.runAsync("DELETE FROM jobs WHERE id = ?", id);
}

export async function getJobs(): Promise<Job[]> {
  const db = await getDb();
  const rows = await db.getAllAsync("SELECT * FROM jobs");
  return rows.map((row: any) => ({
    id: row.id,
    title: row.title,
    completed: row.completed === 1,
  }));
}
export async function updateJob(id: number, completed: boolean) {
  const db = await getDb();
  await db.runAsync(
    "UPDATE jobs SET completed = ? WHERE id = ?",
    completed ? 1 : 0,
    id
  );
}
