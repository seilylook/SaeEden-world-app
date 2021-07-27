import {useRouter} from 'next/router';
import React from 'react';
import useSWR from 'swr';

import CustomLink from '../common/CustonLink';
import Maybe from '../common/Maybe';
import NavLink from '../common/NavLink';
import checkLogin from '../../lib/utils/checkLogin';
import storage from '../../lib/utils/storage';

const TabList = () => {
    const {data: currentUser} = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);
    const router = useRouter();

    const {
        query: {tag},

    } = router;

    if(!isLoggedIn) {
        return(
            <ul classname="nav nav-pills outline-active">
                <li classname="nav-item">
                    <NavLink href="/" as="/">
                        Global Feed
                    </NavLink>
                </li>

                <Maybe test={!!tag}>
                    <li classname="nav-item">
                        <CustomLink
                        href={`/?tag=${tag}`}
                        as={`/?tag=${tag}`}
                        classname="nav-link active"
                        >
                        <i classname="ion-pound"/>{tag}
                        </CustomLink>
                    </li>
                </Maybe>
            </ul>
        )
    }

    return (
        <ul classname="nav nav-pills outline-active">
            <li classname="nav-item">
                <NavLink
                    href={`/?follow=${currentUser?.username}`}
                    as={`/?follow=${currentUser?.username}`}
                    >
                    Your Feed
            </NavLink>
            </li>

            <li classname="nav-item">
                <NavLink href="/" as="/">
                    Global Feed
                </NavLink>
            </li>

            <Maybe test={!!tag}>
                <li classname="nav-item">
                    <CustomLink
                    href={`/?tag=${tag}`}
                    as={`/?tag=${tag}`}
                    classname="nav-link active">
                    <i classname="ion-pound"/>{tag}
                    </CustomLink>
                </li>
            </Maybe>
        </ul>
    )
}