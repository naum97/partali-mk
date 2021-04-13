package com.anteski.partali.model.product_category;

public enum Category {
    JAKNI("Јакни"),
    SAKOA("sakoa"),
    KAPUTI("kaputi"),
    FUSTANI("fustani"),
    KOMBINEZONI("kombinezoni"),
    KOSULI("kosuli"),
    BLUZI("bluzi"),
    MAICI("maici"),
    DZEMPERI("dzemperi"),
    PANTALONI("pantaloni"),
    FARMERKI("farmerki"),
    ZDOLNISTA("zdolnista"),
    BERMUDI("bermudi"),
    ACTIVE_WEAR("active-wear"),
    CO_ORDS_SET("co-ords-set"),
    BIKINI("bikini"),
    DOLNA_OBLEKA("dolna-obleka"),
    PIZAMI("pizami"),
    AKSESOARI("aksesoari"),
    CHANTI("chanti"),
    CHEVLI("chevli");

    Category(String identifier) {
        this.identifier = identifier;
    }

    public String getIdentifier() {
        return identifier;
    }

    private String identifier;

    public static Category valueOfIdentifier(String identifier){
        for(Category category : Category.values()){
            if(identifier.equalsIgnoreCase(category.getIdentifier())){
                return category;
            }
        }
        return null;
    }


}