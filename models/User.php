<?php

namespace app\models;
use yii\web\IdentityInterface;

class User extends \yii\db\ActiveRecord  implements IdentityInterface
{


    public static function tableName()
    {
        return 'user';
    }


    public function rules()
    {
        return [

            [['username', 'authKey', 'password', 'accessToken'], 'string', 'max' => 255],
        ];
    }

    public static function findIdentity($id)
    {
        return self::findOne($id);
    }
    public function getId()
    {
        return $this->id;
    }

    public function getAuthKey()
    {
        // TODO: Implement getAuthKey() method.
    }

    public function validateAuthKey($authKey)
    {
        // TODO: Implement validateAuthKey() method.
    }

    public static function findIdentityByAccessToken($token, $type = null)
    {
        return static::findOne(['authKey' => $token]);
    }



    public function validatePassword($password)
    {

        return $password === $this->password;
    }
}
