import { ec as EC } from 'elliptic';
import React, { useEffect, useState } from 'react';

const ECDSAkeyPair = () => {
    const [publicKey, setPublicKey] = useState()
    const [privateKey, setPrivateKey] = useState()

    useEffect(() => {
        // ECDSA 키 쌍 생성
        const ec = new EC('secp256k1');
        const keyPair = ec.genKeyPair();

        // 공개 키 및 개인 키 출력
        publicKey = keyPair.getPublic('hex');
        privateKey = keyPair.getPrivate('hex');

        setPublicKey(publicKey)
        setPrivateKey(privateKey)
        console.log('Public Key : ', publicKey);
        console.log('Private Key : ', privateKey);
    }, []);

    return (
        <div>
            <h1>ECDSA 키 쌍 생성 예제</h1>
            <span>public key : {publicKey}</span>
            <br/>
            <span>private key : {privateKey}</span>
        </div>
    )
}

export default ECDSAkeyPair;