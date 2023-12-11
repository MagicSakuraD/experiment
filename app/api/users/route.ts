export async function GET(request: Request) {
  const users = [
    {
      name: "霍默·辛普森",
      emoji: "🍩",
      occupation: "核电厂员工",
      age: 39,
      relationship: "父亲",
      description: "好吃懒做的家庭主男，喜欢吃甜甜圈。",
      image: "homer.png",
    },
    {
      name: "玛吉·辛普森",
      emoji: "🍼",
      occupation: "学生",
      age: 1,
      relationship: "女儿",
      description: "霍默和梅琳达的小女儿，可爱又顽皮。",
      image: "maggie.png",
    },
    {
      name: "巴特·辛普森",
      emoji: "🛹",
      occupation: "学生",
      age: 10,
      relationship: "儿子",
      description: "霍默和梅琳达的长子，喜欢滑板和恶作剧。",
      image: "bart.png",
    },
    {
      name: "丽萨·辛普森",
      emoji: "🎷",
      occupation: "学生",
      age: 8,
      relationship: "女儿",
      description: "霍默和梅琳达的中间女儿，聪明善良，喜欢吹萨克斯管。",
      image: "lisa.png",
    },
    {
      name: "梅琳达·辛普森",
      emoji: "👩‍⚕️",
      occupation: "家庭主妇",
      age: 36,
      relationship: "母亲",
      description: "霍默的妻子，照顾家庭和孩子们。",
      image: "marge.png",
    },
  ];

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

// export async function HEAD(request: Request) {}

// export async function POST(request: Request) {}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function PATCH(request: Request) {}

// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}
