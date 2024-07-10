import React, { useEffect, useState } from 'react';
import SnippetAPIInfos from '../../components/SnippetAPIInfos';
import axios from 'axios';

const HomePage = () => {
    const [apiReactInfo, setAPIReactInfo] = useState();
    const [apiTypeScriptInfo, setAPITypeScriptInfo] = useState();

    useEffect(() => {
        axios.get('https://registry.npmjs.com/-/v1/search?text=react')
            .then(response => {
                const packages = response.data.objects.map(obj => obj.package);
                const reactPackage = packages.filter(pkt => pkt.name === 'react');
                setAPIReactInfo(reactPackage[0]);
            })
            .catch(error => console.error(error));

        axios.get('https://registry.npmjs.com/-/v1/search?text=typescript')
            .then(response => {
                const packages = response.data.objects.map(obj => obj.package);
                const typescriptPackage = packages.filter(pkt => pkt.name === 'typescript');
                setAPITypeScriptInfo(typescriptPackage[0]);
                
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>The NPM Registry</h1>
            <p>The package manager for JavaScript. Publish and install JavaScript packages, manage dependencies and more.</p>
            
            {apiReactInfo && <SnippetAPIInfos name={apiReactInfo.name} description={apiReactInfo.description} />}
            
            {apiTypeScriptInfo && <SnippetAPIInfos name={apiTypeScriptInfo.name} description={apiTypeScriptInfo.description} />}
        </div>
    );
};

export default HomePage;