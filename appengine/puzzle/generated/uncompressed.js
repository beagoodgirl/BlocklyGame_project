// Automatically generated file.  Do not edit!

window.CLOSURE_NO_DEPS = true;

(function() {
  var srcs = [
      "third-party/base.js",
      "third-party/blockly/core/utils/keycodes.js",
      "third-party/blockly/core/utils/object.js",
      "third-party/blockly/core/shortcut_registry.js",
      "third-party/blockly/core/utils/coordinate.js",
      "third-party/blockly/core/utils/size.js",
      "third-party/blockly/core/utils/style.js",
      "third-party/blockly/core/utils/colour.js",
      "third-party/blockly/core/utils/rect.js",
      "third-party/blockly/core/utils/global.js",
      "third-party/blockly/core/msg.js",
      "third-party/blockly/core/utils/string.js",
      "third-party/blockly/core/connection_types.js",
      "third-party/blockly/core/constants.js",
      "third-party/blockly/core/utils/useragent.js",
      "third-party/blockly/core/utils.js",
      "third-party/blockly/core/registry.js",
      "third-party/blockly/core/events/events.js",
      "third-party/blockly/core/interfaces/i_block_dragger.js",
      "third-party/blockly/core/events/events_abstract.js",
      "third-party/blockly/core/utils/xml.js",
      "third-party/blockly/core/input_types.js",
      "third-party/blockly/core/utils/svg.js",
      "third-party/blockly/core/utils/dom.js",
      "third-party/blockly/core/xml.js",
      "third-party/blockly/core/events/block_events.js",
      "third-party/blockly/core/block_animations.js",
      "third-party/blockly/core/component_manager.js",
      "third-party/blockly/core/insertion_marker_manager.js",
      "third-party/blockly/core/events/ui_events.js",
      "third-party/blockly/core/events/events_block_drag.js",
      "third-party/blockly/core/block_dragger.js",
      "third-party/blockly/core/interfaces/i_accessibility.js",
      "third-party/blockly/core/connection.js",
      "third-party/blockly/core/interfaces/i_connection_checker.js",
      "third-party/blockly/core/connection_checker.js",
      "third-party/blockly/core/utils/math.js",
      "third-party/blockly/core/events/variable_events.js",
      "third-party/blockly/core/variable_map.js",
      "third-party/blockly/core/theme.js",
      "third-party/blockly/core/theme/classic.js",
      "third-party/blockly/core/utils/metrics.js",
      "third-party/blockly/core/utils/toolbox.js",
      "third-party/blockly/core/options.js",
      "third-party/blockly/core/workspace.js",
      "third-party/blockly/core/touch.js",
      "third-party/blockly/core/browser_events.js",
      "third-party/blockly/core/tooltip.js",
      "third-party/blockly/core/interfaces/i_deletable.js",
      "third-party/blockly/core/interfaces/i_draggable.js",
      "third-party/blockly/core/interfaces/i_contextmenu.js",
      "third-party/blockly/core/interfaces/i_bubble.js",
      "third-party/blockly/core/scrollbar.js",
      "third-party/blockly/core/bubble.js",
      "third-party/blockly/core/bubble_dragger.js",
      "third-party/blockly/core/workspace_dragger.js",
      "third-party/blockly/core/events/events_click.js",
      "third-party/blockly/core/gesture.js",
      "third-party/blockly/core/shortcut_items.js",
      "src/lib-games.js",
      "src/lib-storage.js",
      "third-party/blockly/core/events/workspace_events.js",
      "third-party/blockly/core/events/events_viewport.js",
      "third-party/blockly/core/utils/aria.js",
      "third-party/blockly/core/utils/idgenerator.js",
      "third-party/blockly/core/menuitem.js",
      "third-party/blockly/core/menu.js",
      "third-party/blockly/core/widgetdiv.js",
      "third-party/blockly/core/contextmenu.js",
      "third-party/blockly/core/workspace_audio.js",
      "third-party/blockly/core/renderers/common/block_rendering.js",
      "third-party/blockly/core/theme_manager.js",
      "third-party/blockly/core/touch_gesture.js",
      "third-party/blockly/core/keyboard_nav/ast_node.js",
      "third-party/blockly/core/interfaces/i_copyable.js",
      "third-party/blockly/core/keyboard_nav/marker.js",
      "third-party/blockly/core/keyboard_nav/cursor.js",
      "third-party/blockly/core/keyboard_nav/basic_cursor.js",
      "third-party/blockly/core/keyboard_nav/tab_navigate_cursor.js",
      "third-party/blockly/core/rendered_connection.js",
      "third-party/blockly/core/renderers/common/i_path_object.js",
      "third-party/blockly/core/events/events_selected.js",
      "third-party/blockly/core/extensions.js",
      "third-party/blockly/core/field_registry.js",
      "third-party/blockly/core/marker_manager.js",
      "third-party/blockly/core/dropdowndiv.js",
      "third-party/blockly/core/interfaces/i_registrable.js",
      "third-party/blockly/core/field.js",
      "third-party/blockly/core/field_label.js",
      "third-party/blockly/core/input.js",
      "third-party/blockly/core/blocks.js",
      "third-party/blockly/core/block.js",
      "third-party/blockly/core/interfaces/i_bounded_element.js",
      "third-party/blockly/core/contextmenu_registry.js",
      "third-party/blockly/core/block_svg.js",
      "third-party/blockly/core/events/events_theme_change.js",
      "third-party/blockly/core/grid.js",
      "third-party/blockly/core/interfaces/i_metrics_manager.js",
      "third-party/blockly/core/metrics_manager.js",
      "third-party/blockly/core/connection_db.js",
      "third-party/blockly/core/workspace_drag_surface_svg.js",
      "third-party/blockly/core/workspace_svg.js",
      "third-party/blockly/core/variable_model.js",
      "third-party/blockly/core/variables.js",
      "third-party/blockly/core/names.js",
      "third-party/blockly/core/procedures.js",
      "third-party/blockly/core/css.js",
      "third-party/blockly/core/block_drag_surface.js",
      "third-party/blockly/core/inject.js",
      "third-party/blockly/core/blockly.js",
      "third-party/blockly/core/contextmenu_items.js",
      "third-party/blockly/core/utils/svg_paths.js",
      "third-party/blockly/core/renderers/common/constants.js",
      "third-party/blockly/core/renderers/geras/highlight_constants.js",
      "third-party/blockly/core/events/events_marker_move.js",
      "third-party/blockly/core/renderers/common/marker_svg.js",
      "third-party/blockly/core/renderers/common/path_object.js",
      "third-party/blockly/core/renderers/measurables/types.js",
      "third-party/blockly/core/renderers/measurables/base.js",
      "third-party/blockly/core/renderers/measurables/connections.js",
      "third-party/blockly/core/renderers/measurables/row_elements.js",
      "third-party/blockly/core/renderers/measurables/inputs.js",
      "third-party/blockly/core/renderers/measurables/rows.js",
      "third-party/blockly/core/renderers/common/info.js",
      "third-party/blockly/core/renderers/common/drawer.js",
      "third-party/blockly/core/renderers/common/renderer.js",
      "third-party/blockly/core/renderers/geras/constants.js",
      "third-party/blockly/core/renderers/geras/measurables/inputs.js",
      "third-party/blockly/core/renderers/geras/info.js",
      "third-party/blockly/core/renderers/geras/path_object.js",
      "third-party/blockly/core/renderers/geras/highlighter.js",
      "third-party/blockly/core/renderers/geras/drawer.js",
      "third-party/blockly/core/renderers/geras/renderer.js",
      "src/lib-interface.js",
      "src/lib-dialogs.js",
      "third-party/blockly/core/field_image.js",
      "third-party/blockly/core/field_dropdown.js",
      "puzzle/src/data.js",
      "puzzle/src/blocks.js",
      "src/html.js",
      "puzzle/src/html.js",
      "puzzle/src/main.js"
  ];
  function loadScript() {
    var src = srcs.shift();
    if (src) {
      var script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.onload = loadScript;
      document.head.appendChild(script);
    }
  }
  loadScript();
})();
