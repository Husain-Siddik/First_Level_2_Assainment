# What are some differences between interfaces and types in TypeScript?

✔ Interface কী?
---

Interface হলো object বা class-এর structure define করার একটি উপায়।
এটি primarily object shapes এবং class structure এর জন্য ব্যবহার হয়।

```
interface Person {
  name: string;
  age: number;
}

const p: Person = { name: "Dady", age: 22 };
```

 ✨Interface-এর bebohar:
---

1 .Class implements করতে  && একাধিক declaration merge করা 

2 .শুধুমাত্র object shapes / function signatures এর জন্য ব্যবহার হয়

3. একাধিক declaration merge করা যায়



✔ Type Alias কী?
-----

Type Alias হলো টাইপকে অন্য নামে সংজ্ঞায়িত করার একটি উপায়
```
type ID = string | number;
type Point = [number, number];
```

✔Type Alias-এর ব্যবহার:
---

* Union, Intersection, Tuple define করা যায়

 * Class implements করা যায় না

 * একাধিক declaration merge করা যায় না

✔ কখন কোনটি ব্যবহার করা হয় ?
---

Interface: Object shapes, Class structure -->interface use 

Type Alias: Union, Tuple, Intersection বা complex types  --> type alias use 

