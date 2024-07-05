import { NavBar } from "../components/Nav";
import img0 from "../assets/img0.jpg";
import img1 from "../assets/img1.jpg";
import {
  Code2,
  Lightbulb,
  Brain,
  Code,
  PenTool,
  MessageCircle,
  DatabaseIcon,
  GitPullRequestArrow,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { MessageIcon } from "@/components/Utils";


export default function Home() {
  // const [index, setIndex] = useState(0)
  // const scrollElements = useCallback(function(e: ChangeEvent) {Slider
  //     const carrousel = document.querySelector('.clients .caroussel .element') as HTMLDivElement
  //     let width = carrousel.clientWidth
  //     console.log(index)
  //     console.log(carrousel)
  //     if (index > 1) {
  //         carrousel.style.transform = `translateX(0px)`
  //         setIndex(0)
  //         return
  //     }
  //     carrousel.style.transform = `translateX(-${width}px)`
  // }, [index])

  useEffect(() => {
    // const timer = setInterval(() => setIndex(v => v + 1), 2000)
    // return () => {
    //     clearInterval(timer)
    // }
  }, []);

  const allImglinks = [] as string[];
  for (let i = 0; i < 7; i++) {
    allImglinks.push(`client${i + 1}.png`);
  }

  return (
    <>
      <MessageIcon />
      <div className="bg-blue-800 w-full p-6" style={{ height: "100vh" }}>
        <NavBar />
        <div
          className="flex justify-between bg-opacity-55"
          style={{ width: "90%", margin: "0 auto" }}
        >
          <div className=" mr-6">
            <div className="">
              <img
                src={img0}
                alt=""
                className="mt-8 opacity-30 rounded-2xl object-contain max-w-2xl max-h-screen"
              />
              <div
                className="absolute p-2 ml-16"
                style={{ transform: "translateY(-120%)", maxWidth: "40rem" }}
              >
                <h1 className=" font-bold text-white text-6xl mt-20 ">
                  Institut de
                </h1>
                <h1 className=" font-bold text-white text-6xl">
                  Recherche & de formation
                </h1>
                <h1 className=" font-bold text-white text-4xl">
                  Des métiers du numériques
                </h1>
                <Code className=" text-white" size={64} />
              </div>
            </div>
          </div>

          <img src={img0} alt="image d'asset" className="asset1" />
        </div>
      </div>
      <div className="content bg-white">
        <div className="first-element">
          <div className="circle bg-green-300">
            <Lightbulb size={64} />
            <h1>Text here</h1>
          </div>
          <div className="circle bg-violet-500">
            <Brain size={64} />
            <h1>Text here</h1>
          </div>
          <div className="circle bg-orange-300">
            <PenTool size={64} />
            <h1>Text here</h1>
          </div>
        </div>

        <div className="second-element">
          <div>
            <img src={img1} alt="image d'asset" className="asset2" />
            <div className="project-card">
              <p>Réalisations</p>
              <h1 className=" text-3xl mt-2">1500</h1>
            </div>
          </div>
          <div className="text-content">
            <div className="flex justify-center items-center">
              <div className="trait"></div>

              <h1 className="interest-header">
                LA RECHERCHE DANS LE NUMÉRIQUE
              </h1>
            </div>
            <h1 className="font-bold text-3xl my-10">Nous évoluons</h1>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio possimus fugit sed ab excepturi quas reiciendis eos
              magnam voluptatibus voluptate non, omnis, qui est maxime ratione
              tempora perspiciatis veniam ut officia a delectus id praesentium.
              Error hic odit reiciendis facilis architecto totam consequatur
              suscipit, assumenda labore, quo mollitia dignissimos nam.
            </p>
            <button className="rounded-md bg-blue-800 text-white font-bold flex justify-center items-center p-3">
              Get more infos
            </button>
          </div>
        </div>

        <div className="third-element">
          <h1 className="text-center font-bold text-3xl mt-10">
            Cursus disponibles
          </h1>
          <p className="text-center w-2/4 mx-auto my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Animi nisi culpa veritatis delectus blanditiis eligendi, facilis
            labore ducimus excepturi ipsam?
          </p>
          <div className="w-full bg-blue-800">
            <div className="service-container">
              <div className="card">
                <div>
                  <GitPullRequestArrow size={70} />
                </div>
                <div
                  className="grid grid-rows-3 gap-y-4"
                  style={{ width: "100%", height: "70%" }}
                >
                  <div className="flex justify-start items-center">
                    <div className="trait-white"></div>
                    <h1 className=" text-white ml-2 font-bold">
                      Recherche & Innovation
                    </h1>
                  </div>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt laborum velit explicabo{" "}
                  </p>
                  <div
                    className="text-center"
                    style={{ width: "80%", margin: "0 auto" }}
                  >
                    <button className="flex p-3 rounded-md transition-all hover:bg-white hover:text-blue-800 w-full hover:justify-between">
                      <span className="text-blue-800 mr-2 font-bold">
                        Soumettre projet
                      </span>
                      <ArrowRight size={30} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div>
                  <DatabaseIcon size={70} />
                </div>
                <div
                  className="grid grid-rows-3 gap-y-4"
                  style={{ width: "100%", height: "70%" }}
                >
                  <div className="flex justify-start items-center">
                    <div className="trait-white"></div>
                    <h1 className=" text-white ml-2 font-bold">
                      Analyse de données & IA
                    </h1>
                  </div>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt laborum velit explicabo praesentium mollitia recusandae
                    dignissimos maiores distinctio quasi ex?
                  </p>
                  <div
                    className="text-center"
                    style={{ width: "80%", margin: "0 auto" }}
                  >
                    <button className="flex p-3 rounded-md transition-all hover:bg-white hover:text-blue-800 w-full hover:justify-between">
                      <span className="text-blue-800 mr-2 font-bold">
                        En savoir plus
                      </span>
                      <ArrowRight size={30} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div>
                  <Code2 size={70} />
                </div>
                <div
                  className="grid grid-rows-3 gap-y-4"
                  style={{ width: "100%", height: "70%" }}
                >
                  <div className="flex justify-start items-center">
                    <div className="trait-white"></div>
                    <h1 className=" text-white ml-2 font-bold">
                      Developpement d'Applis web & Mobiles
                    </h1>
                  </div>
                  <p className="text-center">
                    Sunt laborum velit explicabo praesentium mollitia recusandae
                    dignissimos maiores distinctio quasi ex?
                  </p>
                  <div
                    className="text-center"
                    style={{ width: "80%", margin: "0 auto" }}
                  >
                    <button className="flex p-3 rounded-md transition-all hover:bg-white hover:text-blue-800 w-full hover:justify-between">
                      <span className="text-blue-800 mr-2 font-bold">
                        Voir pack
                      </span>
                      <ArrowRight size={30} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div>
                  <Handshake size={70} />
                </div>
                <div
                  className="grid grid-rows-3 gap-y-4"
                  style={{ width: "100%", height: "70%" }}
                >
                  <div className="flex justify-start items-center">
                    <div className="trait-white"></div>
                    <h1 className=" text-white ml-2 font-bold">
                      Assistance & Formtions
                    </h1>
                  </div>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt laborum velit explicabo praesentium mollitia recusandae
                    dignissimos maiores distinctio quasi ex?
                  </p>
                  <div
                    className="text-center"
                    style={{ width: "80%", margin: "0 auto" }}
                  >
                    <button className="flex p-3 rounded-md transition-all hover:bg-white hover:text-blue-800 w-full hover:justify-between">
                      <span className="text-blue-800 mr-2 font-bold">
                        Voir pack
                      </span>
                      <ArrowRight size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clients">
          <h1 className="text-center font-bold text-3xl mb-4">
            Ils nous ont faits confiance
          </h1>
          <div className="caroussel">
            <div className="element">
              {allImglinks.map((imgSrc) => (
                <img
                  key={imgSrc}
                  src={`./src/assets/${imgSrc}`}
                  alt=""
                  className="pr-3 opacity-50 hover:opacity-100 transition-all cursor-pointer"
                />
              ))}
              {allImglinks.map((imgSrc) => (
                <img
                  key={imgSrc}
                  src={`./src/assets/${imgSrc}`}
                  alt=""
                  className="pr-3 opacity-50 hover:opacity-100 transition-all cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}