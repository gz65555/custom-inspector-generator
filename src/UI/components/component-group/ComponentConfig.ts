import { CarouselRef } from "antd/lib/carousel";
import { action, makeObservable, observable } from "mobx";
import React from "react";

export type IComponentItem = {
  key: string;
  label?: string;
  icon?: React.ReactNode;
  children?: IComponentItem[];
};

export class ComponentPanelData {
  isOpen: boolean = false;

  searchString: string = "";

  isChildLevel: boolean = false;

  leafNode: IComponentItem[] = [];

  baseNodes: IComponentItem[] = [
    {
      key: "light",
      label: "light",
      children: [
        {
          key: "SpotLight",
          label: "SpotLight",
        },
        {
          key: "DirectLight",
          label: "DirectLight",
        },
        {
          key: "PointLight",
          label: "PointLight",
        },
      ],
    },
  ];

  @observable
  currentNodes: IComponentItem[] = [];

  @observable
  lastNodes: IComponentItem[] = [];

  currentSelectIndex: number = 0;

  currentCarousel: React.RefObject<CarouselRef> | null = null;

  constructor() {
    makeObservable(this);
    this.currentNodes = this.baseNodes;
  }

  @action
  search(value: string) {
    this.searchString = value;
  }

  @action
  goNext(children: IComponentItem[]) {
    this.currentCarousel!.current!.next()
    this.currentSelectIndex++;
    this.currentSelectIndex = this.currentSelectIndex % 2;
    this.currentNodes = children;
    this.lastNodes = this.baseNodes;
  }

  goPrev() {
    this.currentSelectIndex--;
    this.currentSelectIndex = this.currentSelectIndex % 2;
    this.isChildLevel = false;
  }
}
