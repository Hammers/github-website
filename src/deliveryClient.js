const KenticoContent = require('@kentico/kontent-delivery');

class Article extends KenticoContent.ContentItem {
    constructor() {
        super();
    }
}

export default new KenticoContent.DeliveryClient({
    projectId: '73f3170e-faf9-0099-5050-055983ecd184',
    typeResolvers: [
        new KenticoContent.TypeResolver('article', () => new Article()),
    ]
});