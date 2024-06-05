import { Button, Input } from "@nextui-org/react";
import { database } from "@/db/database";
import { bids as bidsSchema } from "@/db/schema";

export default async function Home() {

  const bids = await database.query.bids.findMany();
  return (
    <main className=" container mx-auto py-4" >
      <form action={async (formdata:FormData) => {
          'use server'
        await database.insert(bidsSchema).values({})
      }}></form>
      <Input name='bid' placeholder='bid' />
      <Button type="submit" > Place a bid </Button>
      {bids.map(bid => (
        <div key={bid.id}>{ bid.id}</div>
      ))}
    </main>
  );
}
