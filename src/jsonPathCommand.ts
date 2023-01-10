import { TextEditor, TextEditorEdit, ViewColumn, WebviewPanel, window } from "vscode";

export function openWindow(editor: TextEditor, edit: TextEditorEdit): WebviewPanel {
    const jsonPathWebView = window.createWebviewPanel('jsonPath.jsonpath', 'JsonPath-preview.jsonpath', { preserveFocus: false, viewColumn: ViewColumn.Beside }, { enableFindWidget: true, enableScripts: true, enableCommandUris: true });

    return jsonPathWebView;
}
