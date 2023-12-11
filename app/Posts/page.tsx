import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rcpziamawqfsddzokimv.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getData() {
  let { data: character, error } = await supabase.from("character").select("*");

  return character;
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      {data?.map((item: any) => (
        <div className="mockup-code" key={item.id}>
          <pre data-prefix="$">
            <code>{item.name}</code>
            <code>{item.gender}</code>
            <code>{item.role}</code>
          </pre>
        </div>
      ))}
    </main>
  );
}
