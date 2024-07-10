import React from "react";


const DetailsPage = (name) => {

  // const [packageInfo, setPackageInfo] = useState();
  // const url = {'https://registry.npmjs.com/-/v1/search?text=$'{name}};
  // console.log(url);


//   useEffect(() => {
//     axios.get({`https://registry.npmjs.com/-/v1/search?text=${name}`})
//         .then(response => {
//             const packages = response.data.objects.map(obj => obj.package);
//             const reactPackage = packages.filter(pkg => pkg.name === 'react');
//             setAPIReactInfo(reactPackage[0]);
//         })
//         .catch(error => console.error(error));
// }, []);

  return (
    <div>DetailsPage</div>
  );
};

export default DetailsPage;