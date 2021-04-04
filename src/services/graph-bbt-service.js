import { request } from "graphql-request";

class graphBbtService {
  static getMenuSections = async () => {
    const { menuSections } = await request(
      "https://api-us-west-2.graphcms.com/v2/ckn2l65gdxrkx01yzhlruaz0t/master",
      `
      	query {
					menuSections {
						chineseTitle
						comingSoon
						title
						menuItems {
							chineseDescription
							chineseTitle
							description
							largeIcedPrice
							mediumHotPrice
							mediumIcedPrice
							title
						}
					}
				}
			`
    );
    return menuSections;
  };
}

export default graphBbtService;
