<?php
/**
 * Created by PhpStorm.
 * User: nguyennam
 * Date: 2020-06-24
 * Time: 21:54
 */
namespace App\Services;

use \GuzzleHttp\Client;

class EtsyService
{
    protected $client;
    protected $response;
    protected $defaultQuery;
    protected $method;

    public function __construct()
    {
        $config = array_merge(['base_uri' => $this->uri()], $this->options());

        $this->client = new Client($config);
        $this->defaultQuery = [
            'api_key' => config('etsy.ETSY_KEY')
        ];
    }

    private function uri()
    {
        return env('ETSY_API');
    }

    private function options()
    {
        return [
            'headers' => [
                'Accept' => 'application/json'
            ]
        ];
    }

    private function callApi($url, $body = [])
    {
        try {
            $this->method = $this->method ?? 'GET';
            $response = $this->client->request($this->method, $url, [
                'query' => $this->defaultQuery
            ], $body);
            return json_decode($response->getBody());
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    private function setParameter($params)
    {
        $this->defaultQuery = array_merge($this->defaultQuery, $params);
    }

    public function getShopReceipt2($id)
    {
        return $this->callApi('receipts/'.$id);
    }

    public function updateReceipt($id, $params = ['was_paid' => '123', 'was_shipped' => '234'])
    {
        $this->method = 'PUT';
        return $this->callApi('receipts/'.$id, $params);
    }

    public function findAllShopReceipts($shopId, $params = [])
    {
        $this->setParameter($params);
        return $this->callApi('/shops/'.$shopId.'/receipts');
    }

    public function submitTracking($shopId, $receiptId, $params = ['tracking_code' => '123', 'carrier_name' => 'abc'])
    {
        $this->method = 'POST';
        return $this->callApi('/shops/'.$shopId.'/receipts/'.$receiptId.'/tracking', $params);
    }

    public function findAllShopReceiptsByStatus($shopId, $status, $params = [])
    {
        $this->setParameter($params);
        return $this->callApi('/shops/'.$shopId.'/receipts/'.$status);
    }

    public function searchAllShopReceipts($shopId, $params = ['search_query' => "name like '%abc%'"])
    {
        $this->setParameter($params);
        return $this->callApi('/shops/'.$shopId.'/receipts/search');
    }

    public function findAllUserBuyerReceipts($userId, $params = [])
    {
        $this->setParameter($params);
        return $this->callApi('/users/'.$userId.'/receipts');
    }

    //-----------transaction shop----------------

    public function getShopTransaction($transactionId = [])
    {
        if (is_array($transactionId)) {
            $transactionId = http_build_query($transactionId, 'transaction_id');
        }
        return $this->callApi('/transactions/'.$transactionId);
    }

    public function findAllListingTransactions($listingId, $params = ['limit' => 25, 'offset' => 0, 'page' => '1'])
    {
        $this->setParameter($params);
        return $this->callApi('/listings/'.$listingId.'/transactions');
    }

    public function findAllShopTransactions($shopId, $params = ['limit' => 25, 'offset' => 0, 'page' => '1'])
    {
        $this->setParameter($params);
        return $this->callApi('/shops/'.$shopId.'/transactions');
    }

    public function findAllUserBuyerTransactions($userId, $params = ['limit' => 25, 'offset' => 0, 'page' => '1'])
    {
        $this->setParameter($params);
        return $this->callApi('/users/'.$userId.'/transactions');
    }
}
