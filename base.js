// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: magic;

// @supermamon's no-background.js 
// https://github.com/supermamon/scriptable-no-background


const RESET_BACKGROUND = !config.runsInWidget;
const { transparent } = importModule('no-background')

let params = null
if (args.widgetParameter == null) {
  params = {"text": ":("}
}
else {
  params = JSON.parse(args.widgetParameter)
}


async function createWidget() {
  let widget = new ListWidget();

  // widget.backgroundColor = new Color("#000000");
  widget.backgroundImage = await transparent(Script.name(), RESET_BACKGROUND);

  let heading = widget.addText(params["text"])
  heading.centerAlignText();
  heading.textColor = new Color("#ffffff");

  return widget;
}


let widget = await createWidget();

if (config.runsInWidget) {
    Script.setWidget(widget);
} else {
    await widget.presentMedium();
}


