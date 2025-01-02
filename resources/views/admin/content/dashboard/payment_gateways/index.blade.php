@extends('admin.content.layouts/layoutMaster')

@section('title', 'درگاه های   ')

@section('vendor-style')
@vite(['resources/assets/vendor/libs/apex-charts/apex-charts.scss'])
  @endsection

  @section('vendor-script')
  @vite(['resources/assets/vendor/libs/apex-charts/apexcharts.js'])
    @endsection

    @section('page-script')
    @vite(['resources/assets/js/dashboards-crm.js'])
      @endsection

      @section('content')
      <div class="wrapper-md">
		
		<div class="panel panel-default">
	        <div class="panel-heading"><i class="fas fa-money-check"></i> درگاه های پرداخت</div>
	        <div class="panel-body">
	
        <div class="alert alert-warning"><i class="fa fa-info-circle"></i> توجه داشته باشید شما فقط یک درگاه فعال می توانید داشته باشید.</div>
        <div class="table-responsive scrollbar">
        <table class="table table-borderless overflow-hidden">
            <thead>
                <tr>
                    <th width="150">عملیات</th>
                    <th>آرم</th>
                    <th>نام درگاه</th>
                    <th>وضعیت</th>
                </tr>
            </thead>
            <tbody>
              
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=asanpardakht">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/asanpardakht.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>آسان پرداخت</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=behpardakht">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/behpardakht.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>به پرداخت بانک ملت</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=idpay">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/idpay.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>آی دی پی (idPay)</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=nextpay">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/nextpay.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>درگاه پرداخت نکست پی</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=parsian">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/parsian.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>درگاه پرداخت بانک پارسیان</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=payir">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/payir.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>درگاه پرداخت پی (pay.ir)</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=payping">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/payping.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>درگاه پرداخت پی پینگ</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=saman">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/saman.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>درگاه پرداخت بانک سامان (sb24.ir)</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=sep">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/sep.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>پرداخت الکترونیک سامان (sep.ir)</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=sepehr">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/sepehr.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>درگاه سپهر صادرات</td>
                <td><badge class="badge text-success">فعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=zarinpal">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/zarinpal.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>درگاه پرداخت زرین پال</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            <tr>
                <td>
                    <a class="btn btn-default btn-sm btn-reveal" href="?mod=payment_gateways&amp;action=edit&amp;name=zibal">
                      <span class="fa fa-edit "></span>
                    </a>
                </td>
                <td>
                    <div class="shadow-sm" style="background-image: url('https://benobe.ir/modules/payment_gateways/assets/images/zibal.png'); width:50px; height:50px; background-size: 80%; background-repeat: no-repeat; border-radius: 5px; background-position: center; border:1px solid #ddd; overflow: hidden;"></div>
                </td>
                <td>درگاه پرداخت زیبال (zibal.ir)</td>
                <td><badge class="badge text-danger">غیرفعال</badge></td>
            </tr>
        
            </tbody>
        </table>
        </div>
    
		</div>
		
		</div>
	</div>
      @endsection
