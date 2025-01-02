<?php

namespace App\Http\Controllers\Admin\Dashboard\Cities;

use App\Http\Controllers\Admin\Controller;
use App\Http\Requests\Admin\Dashboard\Cities\ZoneRequest;
use App\Models\Admin\Dashboard\Cities\Zone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class CitiesController extends Controller {
    /**
    * Display a listing of the resource.
    */

    public function index() {
        $cities = Zone::where( 'level', '1' )->paginate( 10 );

        return view( 'admin.content.dashboard.cities.index', compact( 'cities' ) );
    }

    /**
    * Show the form for creating a new resource.
    */

    public function create() {

        $cities = Zone::where( 'level', '1' )->get();

        return view( 'admin.content.dashboard.cities.create', compact( 'cities' ) );

    }

    public function createCity() {
        $cities = Zone::where( 'level', '1' )->get();

        return view( 'admin.content.dashboard.cities.create-city', compact( 'cities' ) );

    }

    /**
    * Store a newly created resource in storage.
    */

    public function store( ZoneRequest $request ) {
        $zone = new Zone;
        $zone->name = $request->input( 'name' );
        $zone->parent_id = $request->input( 'parent_id' );
        $zone->price_shipping = $request->input( 'price_shipping' );
        $zone->save();
        if ( $zone ) {
            return redirect()->route( 'admin.Dashboard.cities.index' )->with( 'swal-success', ' استان  جدید شما با موفقیت اضافه شد' );

        } else {
            return redirect()->back();
        }

    }

    public function storeCity( ZoneRequest $request ) {
        $zone = new Zone;
        $zone->name = $request->input( 'name' );
        $zone->parent_id = $request->input( 'parent_id' );
        $zone->price_shipping = $request->input( 'price_shipping' );
        $zone->save();
        if ( $zone ) {
            return redirect()->route( 'admin.Dashboard.cities.show', $zone->parent_id )->with( 'swal-success', ' شهر  جدید شما با موفقیت اضافه شد' );

        } else {
            return redirect()->back();
        }

    }

    /**
    * Display the specified resource.
    */

    public function show( Request $request, string $id ) {

        //    dd( $citiesSearch );
        $citiesSearch = Zone::where( 'name', 'LIKE', '%' . $request->search . '%' )->get();

        if ( $request->ajax() ) {

            $output = '';

            if ( $citiesSearch ) {

                foreach ( $citiesSearch as $city ) {

                    $output .= '<tr>' .
                    '<td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></td>' .
                    '<td>' . $city->id . '</td>' .
                    '<td>' . $city->name . '</td>' .
                    '<td>' .
                    '<span id="' . $city->id . '" title="برای فعال یا غیر فعالسازی وضعیت کلیک کنید" onclick="changeStatus(' . $city->id . ')" data-url="' . route( 'admin.Dashboard.cities.status-city', $city->id ) . '" class="cursor-pointer badge bg-label-' . ( $city->status == 1 ? 'success' : 'danger' ) . ' me-1" ' . ( $city->status === 1 ? 'active' : 'deactive' ) . '>' .
                    ( $city->status === 0 ? 'غیر فعال' : 'فعال' ) .
                    '</span>' .
                    '</td>' .
                    '<td>' .
                    '<div class="dropdown">' .
                    '<button class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown" type="button">' .
                    '<i class="ti ti-dots-vertical"></i>' .
                    '</button>' .
                    '<div class="dropdown-menu">' .
                    '<a class="dropdown-item" onclick="location.href=\'' . url('admin/dashboard/cities/edit-city/' . $city->id) . '\'" href="javascript:void(0);">' .
                    '<i class="ti ti-pencil me-1"></i> ویرایش' .
                    '</a>' .
                    '<form method="POST" class="" action="' . url( 'admin/dashboard/cities/delete-city/' . $city->id ) . '">' .
                    csrf_field() .
                    method_field( 'DELETE' ) .
                    '<button type="submit" class="dropdown-item delete" id="delete">' .
                    '<i class="ti ti-trash me-1"></i> حذف' .
                    '</button>' .
                    '</form>' .
                    '</div>' .
                    '</div>' .
                    '</td>' .
                    '</tr>';

                }
                return $output;

            }
        }
        $cityName = Zone::where( 'id', $id )->get();

        $cities = Zone::where( 'parent_id', $id )->paginate( 10 );

        return view( 'admin.content.dashboard.cities.show', compact( [ 'cities', 'cityName' ] ) );

    }

    /**
    * Show the form for editing the specified resource.
    */
    // public function edit( string $id )

    public function edit( string $id ) {

        $city = Zone::where( 'id', $id )->first();
        return view( 'admin.content.dashboard.cities.edit', compact( 'city' ) );

    }

    public function editCity( string $id ) {
        $cities = Zone::where( 'level', '1' )->get();

        $cityy = Zone::where( 'id', $id )->first();
        return view( 'admin.content.dashboard.cities.edit-city', compact( [ 'cityy', 'cities' ] ) );

    }

    /**
    * Update the specified resource in storage.
    */

    public function update( ZoneRequest $request, string $id ) {

        $item = Zone::find( $id );
        $item->name = $request->input( 'name' );
        $item->parent_id = $request->input( 'level' );
        $item->price_shipping = $request->input( 'price_shipping' );
        $item->save();
        return redirect()->route( 'admin.Dashboard.cities.index' )->with( 'swal-success', 'ویرایش استان با موفقیت انجام شد' );

    }

    public function updateCity( ZoneRequest $request, string $id ) {

        $item = Zone::find( $id );
        $item->name = $request->input( 'name' );
        $item->parent_id = $request->input( 'level' );
        $item->price_shipping = $request->input( 'price_shipping' );
        $item->save();
        return redirect()->route( 'admin.Dashboard.cities.show', $item->parent_id )->with( 'swal-success', 'ویرایش شهر با موفقیت انجام شد' );

    }

    /**
    * Remove the specified resource from storage.
    */

    public function destroy( string $id ) {
        $item = Zone::find( $id );
        $item->delete();
        return redirect()->route( 'admin.Dashboard.cities.index' )->with( 'swal-success', 'حذف استان با موفقیت انجام شد' );

    }

    public function destroyCity( string $id ) {
        $item = Zone::find( $id );
        $item->delete();
        return redirect()->route( 'admin.Dashboard.cities.show', $item->parent_id )->with( 'swal-success', 'حذف شهر با موفقیت انجام شد' );

    }

    public function status( Zone $zone ) {

        $zone->status = $zone->status == 0 ? 1 : 0;
        $result = $zone->save();
        if ( $result ) {
            if ( $zone->status == 0 ) {
                return response()->json( [ 'status' => true, 'active' => false ] );
            } else {
                return response()->json( [ 'status' => true, 'active' => true ] );
            }
        } else {
            return response()->json( [ 'status' => false ] );
        }

    }

    public function statusCity( Zone $zone ) {

        $zone->status = $zone->status == 0 ? 1 : 0;
        $result = $zone->save();
        if ( $result ) {
            if ( $zone->status == 0 ) {
                return response()->json( [ 'status' => true, 'active' => false ] );
            } else {
                return response()->json( [ 'status' => true, 'active' => true ] );
            }
        } else {
            return response()->json( [ 'status' => false ] );
        }

    }

    public function searchZone( Request $request ) {
        if ( $request->ajax() ) {

            $output = '';
            $zones = Zone::where( 'name', 'LIKE', '%' . $request->search . '%' )->where( 'level', '1' )->get();

            if ( $zones ) {

                foreach ( $zones as $zone ) {

                    $output .= '<tr>' .
                    '<td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></td>' .
                    '<td>' . $zone->id . '</td>' .
                    '<td>' . $zone->name . '</td>' .
                    '<td>' .
                    '<span id="' . $zone->id . '" title="برای فعال یا غیر فعالسازی وضعیت کلیک کنید" onclick="changeStatus(' . $zone->id . ')" data-url="' . route( 'admin.Dashboard.cities.status', $zone->id ) . '" class="cursor-pointer badge bg-label-' . ( $zone->status == 1 ? 'success' : 'danger' ) . ' me-1" ' . ( $zone->status === 1 ? 'active' : 'deactive' ) . '>' .
                    ( $zone->status === 0 ? 'غیر فعال' : 'فعال' ) .
                    '</span>' .
                    '</td>' .
                    '<td>' .
                    '<div class="dropdown">' .
                    '<button class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown" type="button">' .
                    '<i class="ti ti-dots-vertical"></i>' .
                    '</button>' .
                    '<div class="dropdown-menu">' .
                    '<a class="dropdown-item" onclick="location.href=\'' . url('admin/dashboard/cities/show/' . $zone->id) . '\'" href="javascript:void(0);">' .
                    '<i class="ti ti-eye me-1"></i> مشاهده شهرستان' .
                    '</a>' .
                    '<a class="dropdown-item" onclick="location.href=\'' . url('admin/dashboard/cities/edit/' . $zone->id) . '\'" href="javascript:void(0);">' .
                    '<i class="ti ti-pencil me-1"></i> ویرایش' .
                    '</a>' .
                    '<form method="POST" class="" action="' . url( 'admin/dashboard/cities/delete/' . $zone->id ) . '">' .
                    csrf_field() .
                    method_field( 'DELETE' ) .
                    '<button type="submit" class="dropdown-item delete" id="delete">' .
                    '<i class="ti ti-trash me-1"></i> حذف' .
                    '</button>' .
                    '</form>' .
                    '</div>' .
                    '</div>' .
                    '</td>' .
                    '</tr>';

                }
                return $output;

            }
        }
    }

    public function searchZoneCity( Request $request ) {
        if ( $request->ajax() ) {

            $output = '';

            $cities = Zone::where( 'name', 'LIKE', '%' . $request->search . '%' )->where( 'level', '<>', '1' )->get();

            if ( $cities ) {

                foreach ( $cities as $city ) {

                    $output .= '<tr>' .
                    '<td class="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all" rowspan="1" colspan="1" style="width: 18px;" data-col="1" aria-label=""><input type="checkbox" class="form-check-input"></td>' .
                    '<td>' . $city->id . '</td>' .
                    '<td>' . $city->name . '</td>' .
                    '<td>' .
                    '<span id="' . $city->id . '" title="برای فعال یا غیر فعالسازی وضعیت کلیک کنید" onclick="changeStatus(' . $city->id . ')" data-url="' . route( 'admin.Dashboard.cities.status', $city->id ) . '" class="cursor-pointer badge bg-label-' . ( $city->status == 1 ? 'success' : 'danger' ) . ' me-1" ' . ( $city->status === 1 ? 'active' : 'deactive' ) . '>' .
                    ( $city->status === 0 ? 'غیر فعال' : 'فعال' ) .
                    '</span>' .
                    '</td>' .
                    '<td>' .
                    '<div class="dropdown">' .
                    '<button class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown" type="button">' .
                    '<i class="ti ti-dots-vertical"></i>' .
                    '</button>' .
                    '<div class="dropdown-menu">' .
                    '<a class="dropdown-item" onclick="location.href=\'' . url('admin/dashboard/cities/edit-city/' . $city->id) . '\'" href="javascript:void(0);">' .
                    '<i class="ti ti-pencil me-1"></i> ویرایش' .
                    '</a>' .
                    '<form method="POST" class="" action="' . url( 'admin/dashboard/cities/delete-city/' . $city->id ) . '">' .
                    csrf_field() .
                    method_field( 'DELETE' ) .
                    '<button type="submit" class="dropdown-item delete" id="delete">' .
                    '<i class="ti ti-trash me-1"></i> حذف' .
                    '</button>' .
                    '</form>' .
                    '</div>' .
                    '</div>' .
                    '</td>' .
                    '</tr>';

                }
                return $output;

            }
        }
    }
}
