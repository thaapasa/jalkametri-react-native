import sqlite from 'react-native-sqlite-storage';

export async function testDb() {
  const db = await sqlite.openDatabase({
    name: 'jalkametri.db',
    location: 'default',
  });
  await db.transaction(async t => {
    const rows = await t.executeSql('SELECT * FROM foo');
    console.log(rows);
  });
}
