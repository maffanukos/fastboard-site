"use client";

import Tag from "./components/Tag";
import Buttons from "./components/Buttons";
import SelectBordered from "./components/SelectBordered";
import SelectStringify from "./components/SelectStringify";
import Search from "./components/Search";
import DropdownList from "./components/DropdownList";
import Checkbox from "./components/Checkbox";
import Switcher from "./components/Switcher";
import Input from "./components/Input";
import Breadcrumbs from "./components/Breadcrumbs";
import SingleLink from "./components/SingleLink";
import LongLink from "./components/LongLink";
import Cursor from "./components/Cursor";
import Divider from "./components/Divider";
import Highlights from "./components/Highlights";
import CardBg from "./components/CardBg";
import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import ContactUs from "./components/ContactUs";
import Cookie from "./components/Cookie";
import BlogCards from "./components/BlogCards";
import Bullet from "./components/Bullet";
import List from "./components/List";
import NextPrevLinks from "./components/NextPrevLinks";
import ArticleHeader from "./components/ArticleHeader";
import ArticleFooter from "./components/ArticleFooter";
import PageContents from "./components/PageContents";
import Blockquote from "./components/Blockquote";
import Images from "./components/Images";
import Slider from "./components/Slider";
import Gallery from "./components/Gallery";
import Video from "./components/Video";

interface LibraryComponentsProps {
  locale: string;
}

export default function LibraryComponents({ locale }: LibraryComponentsProps) {
  const components = [
    { name: "Tag", component: <Tag /> },
    { name: "Buttons", component: <Buttons /> },
    { name: "Select Bordered", component: <SelectBordered /> },
    { name: "Select Stringify", component: <SelectStringify /> },
    { name: "Search", component: <Search /> },
    { name: "Dropdown List", component: <DropdownList /> },
    { name: "Checkbox", component: <Checkbox /> },
    { name: "Switcher", component: <Switcher /> },
    { name: "Input", component: <Input /> },
    { name: "Breadcrumbs", component: <Breadcrumbs /> },
    { name: "Single Link", component: <SingleLink /> },
    { name: "Long Link", component: <LongLink /> },
    { name: "Cursor", component: <Cursor /> },
    { name: "Divider", component: <Divider /> },
    { name: "Highlights", component: <Highlights /> },
    { name: "Card Background", component: <CardBg /> },
    { name: "Header", component: <Header /> },
    { name: "Section Header", component: <SectionHeader /> },
    { name: "Contact Us", component: <ContactUs /> },
    { name: "Cookie", component: <Cookie /> },
    { name: "Blog Cards", component: <BlogCards /> },
    { name: "Bullet", component: <Bullet /> },
    { name: "List", component: <List /> },
    { name: "Next/Prev Links", component: <NextPrevLinks /> },
    { name: "Article Header", component: <ArticleHeader /> },
    { name: "Article Footer", component: <ArticleFooter /> },
    { name: "Page Contents", component: <PageContents /> },
    { name: "Blockquote", component: <Blockquote /> },
    { name: "Images", component: <Images /> },
    { name: "Slider", component: <Slider /> },
    { name: "Gallery", component: <Gallery /> },
    { name: "Video", component: <Video /> },
  ];

  return (
    <div className="space-y-24">
      {components.map((item, index) => (
        <div
          key={index}
          className="rounded-xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="mb-6 text-2xl font-semibold text-white">
            {item.name}
          </h2>
          <div className="rounded-lg border border-white/5 bg-[#040D15] p-6">
            {item.component}
          </div>
        </div>
      ))}
    </div>
  );
}
