import { blogs } from "../data/blog";
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams();

  const blog = blogs.filter(item => item.id == id)

  const dateObject = new Date(blog[0]?.published_at);
  const formattedDate = dateObject.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <>
      <img
        className="h-[60vh] w-full bg-gray-500"
        alt="Banner"
        src={blog[0]?.image}
      />
      <div className="relative -top-20 container mx-auto bg-gray-100 p-10 rounded-md shadow-md">
        <h4 className="text-gray-500 font-bold">By I do not know</h4>
        <h1 className="text-3xl font-semibold my-5">
          {blog[0]?.title}
        </h1>
        <div className="flex justify-between text-gray-400">
          <span>Written {blog[0]?.author}</span>
          <span>Release date: {formattedDate}</span>
        </div>
      </div>

      <main className="container mx-auto mb-10 text-justify">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt at
          libero fugit voluptas voluptate? Totam commodi dolor voluptatibus,
          quia quod consequatur possimus veritatis maxime consectetur eaque
          facere neque perferendis error? Asperiores adipisci fugiat dolore
          aliquid blanditiis sapiente quam, officiis doloremque sunt autem fuga,
          excepturi porro eveniet quibusdam, aperiam qui? Sunt at sint voluptate
          eveniet, soluta sit molestiae animi esse tempora. Delectus magni esse
          vero unde. Libero sed maxime deserunt cum. Dolores eius officia
          quisquam sit, vel nisi obcaecati suscipit enim exercitationem
          accusantium iste ratione nam doloremque, voluptates fugit sed
          cupiditate. Iure facere repudiandae laboriosam quis impedit dolor, sed
          molestias distinctio iusto aut deleniti earum minima sint? Hic id
          quae, voluptates impedit eum aut dolor temporibus numquam mollitia,
          perspiciatis officia obcaecati.
        </p>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem
          placeat porro deserunt blanditiis iusto beatae distinctio ad, illo
          nemo ipsam debitis, illum nam unde, at repellendus tenetur
          necessitatibus magni? Voluptatem unde vitae repellat alias laudantium
          nesciunt eveniet atque doloribus, sapiente quod. Perferendis itaque
          est et. Quasi dignissimos harum, enim blanditiis iste, eligendi
          repudiandae deserunt necessitatibus et deleniti provident dolorum.
          Eos, eius beatae! Ipsum, mollitia. Ducimus architecto culpa aperiam
          labore sint placeat nulla perferendis iusto voluptate earum commodi,
          quas corrupti, voluptas tenetur nam accusamus. Asperiores, in
          expedita? Odio, omnis accusamus! Eaque atque sunt labore debitis,
          perspiciatis voluptatibus nemo explicabo impedit, excepturi amet at
          saepe similique. Dolore, debitis consequuntur error veniam, inventore
          asperiores ut, qui aspernatur pariatur porro quasi voluptas iure?
          Quidem at, facere eos incidunt ut eaque quo eius expedita iste commodi
          dolorem ex odio harum ab odit minus in, tempora natus consequatur
          accusamus. Veritatis aliquid debitis impedit vero magni! Illo commodi
          illum eius laborum obcaecati quod est maiores omnis ipsum. Minus iste
          culpa nisi amet sed qui optio labore recusandae in earum corrupti
          itaque a, blanditiis atque iusto accusantium! Consequuntur minus
          libero minima nihil. Cumque quis reprehenderit vitae! Asperiores
          doloremque eligendi eos velit explicabo rerum tenetur iure molestias
          animi ipsa atque distinctio nobis dolorem, delectus libero soluta
          fugiat deserunt? Cum repellendus praesentium fuga. Cum suscipit
          repellendus nemo ea quo ipsum ex commodi at corrupti voluptate
          doloremque sapiente dicta nihil minus officia similique molestiae ad
          fugiat id temporibus, totam nostrum. Consequuntur neque aliquid eaque,
          obcaecati modi ad assumenda adipisci vero at temporibus. Voluptate
          sequi magni culpa esse cum vitae dolore architecto earum inventore
          laudantium quidem enim expedita, obcaecati voluptatum eos. Ab, eos
          vitae repellat possimus autem officiis eius. Delectus, labore
          distinctio quas molestias libero in nostrum officia sunt aut aliquam
          dolor harum, voluptas fugit animi ea ut iste numquam deleniti.
        </p>
      </main>
    </>
  );
};

export default ArticlePage;
