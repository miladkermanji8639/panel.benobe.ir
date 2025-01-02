@isset($pageConfigs)
{!! Helper::updatePageConfig($pageConfigs) !!}
@endisset
@php
$configData = Helper::appClasses();
@endphp

@isset($configData["layout"])
@include((( $configData["layout"] === 'horizontal') ? 'admin.content.layouts.horizontalLayout' :
(( $configData["layout"] === 'blank') ? 'admin.content.layouts.blankLayout' :
(($configData["layout"] === 'front') ? 'admin.content.layouts.layoutFront' : 'admin.content.layouts.contentNavbarLayout') )))
@endisset





