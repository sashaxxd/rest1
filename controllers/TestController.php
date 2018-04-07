<?php
/**
 * Created by PhpStorm.
 * User: saha
 * Date: 07.04.2018
 * Time: 12:24
 */

namespace app\controllers;

use app\models\Test;
use app\models\User;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\rest\ActiveController;

class TestController extends ActiveController
{
    public $modelClass = 'app\models\Test';

    public function behaviors()
    {
        /**
         * Через  HttpBasicAuth
         */
//        $behaviors = parent::behaviors();
//        $behaviors['authenticator'] = [
//            'class' => HttpBasicAuth::className(),
//            'auth' => [$this, 'auth']
//        ];
//        return $behaviors;
        /**
         * Через  QueryParamAuth
         */
        $behaviors = parent::behaviors();
        $behaviors['authenticator']['class'] = QueryParamAuth::className();
        $behaviors['authenticator']['tokenParam'] = 'token';
        return $behaviors;

    }

    public function auth($username, $password)
    {
        $user = User::findOne(['username' => $username]);

        if($user){
            return $user->validatePassword($password) ? $user : null;
        }
        else{
            echo 'Не верно';
            exit();
        }

    }

    public function init()
    {
        parent::init();
        \Yii::$app->user->enableSession = false;
    }





}