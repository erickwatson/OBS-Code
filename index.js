// @ts-check
import { OBS, Scene } from "@sceneify/core"
import { ColorSource } from "@sceneify/sources"

const obs = new OBS();
await obs.connect("ws://localhost:4445");

const triggersScene = new Scene({
    name: "Triggers",
    items: {}
})

await triggersScene.link(obs)
// await triggersScene.create(obs)

const someSource = new ColorSource({
    name: "Some Source",
    settings: {
        width: 300,
        height: 400,
        color: 0xFFFF0000
    }
});

const item1 = await triggersScene.createItem("someSource", {
    source: someSource
})

const item2 = await triggersScene.createItem("anotherSource", {
    source: someSource
})

item1.setTransform({
    rotation: 90,
    positionX: 100,
    positionY: 200
})