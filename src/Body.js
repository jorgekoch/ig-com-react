import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./Sidebar";










export default function Body () {
    return (
        <>
        <div class="corpo">
        <div class="esquerda">
            <Stories />
            <Posts />
            <SideBar />
        </div>
      </div>
      </>
    )
};