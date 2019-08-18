import addon from "../../core/addon";
import { NodeWidget } from "../../QtGui/QWidget";
import { BaseWidgetEvents } from "../../core/EventWidget";
import { NativeElement } from "../../core/Component";

export const QPlainTextEditEvents = Object.freeze({
  ...BaseWidgetEvents
});
export class QPlainTextEdit extends NodeWidget {
  native: NativeElement;
  constructor(parent?: NodeWidget) {
    let native;
    if (parent) {
      native = new addon.QPlainTextEdit(parent.native);
    } else {
      native = new addon.QPlainTextEdit();
    }
    super(native);
    this.native = native;
    this.parent = parent;
    // bind member functions
    this.setPlainText.bind(this);
  }
  setPlainText(text: string | number) {
    this.native.setPlainText(`${text}`);
  }
}
