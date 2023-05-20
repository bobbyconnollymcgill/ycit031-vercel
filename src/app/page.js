import Image from "next/image";
import { createClient } from "@vercel/postgres";

import styles from "./page.module.css";

export default async function Home() {
  const client = createClient();
  await client.connect();

  const { rows } = await client.sql`
SELECT name, message
FROM guest_messages`;

  console.log(rows);

  return (
    <main className={styles.main}>
      {rows.map((r) => (
        <span>
          <span>{r.name}</span>
          <span>{r.message}</span>
        </span>
      ))}
    </main>
  );
}
